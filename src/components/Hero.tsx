import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

interface HeroProps {
  onOpenForm: () => void;
}

const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="animate-fade-in">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
                The Creative OS for Agencies
              </p>
              <h1 className="display-text mb-8">
                Turn brand assets into 
                <span className="block text-primary">UGC-style ads.</span>
                <span className="block text-muted-foreground">In minutes.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0">
                Save creative cost. Ship more tests. Built for performance marketing agencies in India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" onClick={onOpenForm}>
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5" />
                  Book a Demo
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>India-first</span>
                <span className="text-border">•</span>
                <span>Agency-focused</span>
                <span className="text-border">•</span>
                <span>No fake avatars</span>
                <span className="text-border">•</span>
                <span>No GPU bills</span>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
