import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import SavingsSection from "@/components/SavingsSection";
import Features from "@/components/Features";
import Differentiators from "@/components/Differentiators";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <>
      <Helmet>
        <title>CreativOS — The Creative Operating System for Agencies | creativos.in</title>
        <meta 
          name="description" 
          content="Generate UGC-style ad videos from brand assets — faster, cheaper. Early access for agencies in India." 
        />
        <meta property="og:title" content="CreativOS — The Creative Operating System for Agencies" />
        <meta property="og:description" content="Generate UGC-style ad videos from brand assets — faster, cheaper. Early access for agencies in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creativos.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreativOS — The Creative Operating System for Agencies" />
        <meta name="twitter:description" content="Generate UGC-style ad videos from brand assets — faster, cheaper. Early access for agencies in India." />
        <link rel="canonical" href="https://creativos.in" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenForm={openForm} />
        
        <main>
          <Hero onOpenForm={openForm} />
          <WhatWeDo />
          <HowItWorks />
          <SavingsSection />
          <Features />
          <Differentiators />
          <DemoSection />
          <CTASection onOpenForm={openForm} />
        </main>

        <Footer />

        <LeadFormModal open={isFormOpen} onOpenChange={setIsFormOpen} />
      </div>
    </>
  );
};

export default Index;
