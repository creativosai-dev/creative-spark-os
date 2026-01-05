import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

interface HeroProps {
  onOpenForm: () => void;
}

const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 pb-16 lg:pt-32 lg:pb-24">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="animate-fade-in">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                The Creative Operating System for Agencies
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">CreativOS</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/90 font-medium mb-4">
                Generate UGC-style ad videos from your brand assets in minutes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Save creative cost and ship more tests. Built for performance marketing agencies in India.
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
                  Book a 10-minute Demo
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  India-first
                </span>
                <span className="mx-3 text-border">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Agency-focused
                </span>
                <span className="mx-3 text-border">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  No fake avatars
                </span>
                <span className="mx-3 text-border">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  No GPU bills
                </span>
              </p>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
