import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import ProductMockup from "./ProductMockup";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AI-Powered UGC Ads Engine
            </div>
            
            <h1 className="display-text text-foreground mb-6">
              Generate UGC Ads
              <span className="block text-primary">That Convert</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Turn your brand assets into scroll-stopping UGC-style ad videos. 
              Powered by ad psychology frameworks and AI — ready to publish on 
              Meta, TikTok & YouTube Shorts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={onOpenForm}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Generate UGC Ads
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToHowItWorks}
                className="font-semibold px-8 h-14 text-lg border-2 hover:bg-muted"
              >
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No editors needed
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ad psychology built-in
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ready to publish
              </div>
            </div>
          </div>

          {/* Right - Product Mockup */}
          <div className="relative lg:pl-8">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
