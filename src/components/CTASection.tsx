import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LeadForm from "./LeadForm";

interface CTASectionProps {
  onOpenForm: () => void;
}

const CTASection = ({ onOpenForm }: CTASectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - CTA text */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Scale Your <span className="text-gradient">Creative Output</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join India's leading performance agencies already on the waitlist. Get early access and special founding rates.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <span className="text-foreground">Sign up in 30 seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <span className="text-foreground">We'll reach out within 2 business days</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <span className="text-foreground">Get exclusive early access</span>
              </div>
            </div>

            <div className="mt-8 lg:hidden">
              <Button variant="hero" size="xl" onClick={onOpenForm} className="w-full">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right - Inline form */}
          <div className="card-elevated p-8">
            <h3 className="text-xl font-semibold mb-6">Get Early Access</h3>
            <LeadForm variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
