import logging
from django.contrib.auth import get_user_model
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from rest_framework import status, permissions, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenViewBase

from .serializers import (
    UserRegistrationSerializer,
    UserProfileSerializer,
    PasswordResetRequestSerializer,
    PasswordResetConfirmSerializer,
    EmailVerificationSerializer,
)
from .tasks import send_verification_email, send_password_reset_email
from .tokens import account_activation_token

User = get_user_model()
logger = logging.getLogger(__name__)

class UserRegistrationView(generics.CreateAPIView):
    """View for user registration."""
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Send verification email
        send_verification_email.delay(user.id)
        
        return Response(
            {"detail": "User registered successfully. Please check your email for verification."},
            status=status.HTTP_201_CREATED
        )

class UserProfileView(generics.RetrieveUpdateAPIView):
    """View for user profile management."""
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class PasswordResetRequestView(APIView):
    """View for requesting a password reset."""
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        try:
            user = User.objects.get(email=email, is_active=True)
            send_password_reset_email.delay(user.id)
        except User.DoesNotExist:
            logger.warning(f"Password reset requested for non-existent email: {email}")
            
        # Always return success to prevent email enumeration
        return Response(
            {"detail": "If an account exists with this email, you will receive a password reset link."},
            status=status.HTTP_200_OK
        )

class PasswordResetConfirmView(APIView):
    """View for confirming password reset."""
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, uidb64, token):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        
        if user is not None and account_activation_token.check_token(user, token):
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            return Response(
                {"detail": "Password has been reset successfully."},
                status=status.HTTP_200_OK
            )
        
        return Response(
            {"error": "Invalid reset link"},
            status=status.HTTP_400_BAD_REQUEST
        )

class EmailVerificationView(APIView):
    """View for email verification."""
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, token):
        try:
            uid = force_str(urlsafe_base64_decode(token.split('.')[0]))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist, IndexError):
            user = None
        
        if user is not None and account_activation_token.check_token(user, token):
            if not user.email_verified:
                user.email_verified = True
                user.save()
                return Response(
                    {"detail": "Email verified successfully."},
                    status=status.HTTP_200_OK
                )
            return Response(
                {"detail": "Email is already verified."},
                status=status.HTTP_200_OK
            )
        
        return Response(
            {"error": "Invalid verification link"},
            status=status.HTTP_400_BAD_REQUEST
        )

class CustomTokenObtainPairView(TokenViewBase):
    """Custom token obtain view to include user data in response."""
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = serializer.user
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'is_staff': user.is_staff,
                'is_superuser': user.is_superuser,
            }
        })
