import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DashboardPreview />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;