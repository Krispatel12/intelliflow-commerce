import logging
from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.urls import reverse

from .models import User
from .tokens import account_activation_token

logger = logging.getLogger(__name__)

def get_absolute_url():
    """Get the base URL for the frontend."""
    return getattr(settings, 'FRONTEND_URL', 'http://localhost:3000')

@shared_task(bind=True, max_retries=3)
def send_verification_email(self, user_id):
    """Send verification email to the user."""
    try:
        user = User.objects.get(pk=user_id)
        token = account_activation_token.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        
        verification_url = f"{get_absolute_url()}/verify-email/{uid}.{token}/"
        
        subject = 'Verify your email address'
        message = render_to_string('emails/verification_email.html', {
            'user': user,
            'verification_url': verification_url,
        })
        
        send_mail(
            subject=subject,
            message='',  # HTML message is used, so we leave this empty
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            html_message=message,
            fail_silently=False,
        )
        logger.info(f"Verification email sent to {user.email}")
        
    except User.DoesNotExist:
        logger.error(f"User with id {user_id} does not exist")
    except Exception as e:
        logger.error(f"Error sending verification email: {str(e)}")
        # Retry the task after 5 minutes
        raise self.retry(exc=e, countdown=300)

@shared_task(bind=True, max_retries=3)
def send_password_reset_email(self, user_id):
    """Send password reset email to the user."""
    try:
        user = User.objects.get(pk=user_id)
        token = account_activation_token.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        
        reset_url = f"{get_absolute_url()}/reset-password/confirm/{uid}/{token}/"
        
        subject = 'Reset your password'
        message = render_to_string('emails/password_reset_email.html', {
            'user': user,
            'reset_url': reset_url,
        })
        
        send_mail(
            subject=subject,
            message='',  # HTML message is used, so we leave this empty
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            html_message=message,
            fail_silently=False,
        )
        logger.info(f"Password reset email sent to {user.email}")
        
    except User.DoesNotExist:
        logger.error(f"User with id {user_id} does not exist")
    except Exception as e:
        logger.error(f"Error sending password reset email: {str(e)}")
        # Retry the task after 5 minutes
        raise self.retry(exc=e, countdown=300)
