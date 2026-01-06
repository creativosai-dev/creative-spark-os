import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

interface FinalCTASectionProps {
  onOpenForm: () => void;
}

const FinalCTASection = ({ onOpenForm }: FinalCTASectionProps) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Abstract Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Stop waiting for creatives.
            <span className="block text-accent">Start scaling ads.</span>
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join leading performance agencies who've replaced slow creative workflows 
            with AI-powered ad generation. Get early access and founding member rates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={onOpenForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 h-16 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Creating UGC Ads
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenForm}
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-10 h-16 text-lg"
            >
              Join Early Access
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Start generating in 5 minutes
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Founding member pricing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
