import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LandingHeader from "@/components/landing/LandingHeader";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import PricingSection from "@/components/landing/PricingSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import LeadFormModal from "@/components/LeadFormModal";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <>
      <Helmet>
        <title>CreativOS — AI-Powered UGC Ads Engine for Agencies | creativos.ai</title>
        <meta 
          name="description" 
          content="Generate high-converting UGC-style ad videos from your brand assets. Powered by ad psychology frameworks. Built for performance marketers and agencies." 
        />
        <meta property="og:title" content="CreativOS — AI-Powered UGC Ads Engine" />
        <meta property="og:description" content="Generate high-converting UGC-style ad videos from your brand assets. Built for performance marketers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creativos.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreativOS — AI-Powered UGC Ads Engine" />
        <meta name="twitter:description" content="Generate high-converting UGC-style ad videos from your brand assets. Built for performance marketers." />
        <link rel="canonical" href="https://creativos.ai" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <LandingHeader onOpenForm={openForm} />
        
        <main>
          <HeroSection onOpenForm={openForm} />
          <ProblemSection />
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
          <section id="features">
            <FeaturesSection />
          </section>
          <ComparisonSection />
          <section id="pricing">
            <PricingSection onOpenForm={openForm} />
          </section>
          <SocialProofSection />
          <FinalCTASection onOpenForm={openForm} />
        </main>

        <LandingFooter />

        <LeadFormModal open={isFormOpen} onOpenChange={setIsFormOpen} />
      </div>
    </>
  );
};

export default Index;
