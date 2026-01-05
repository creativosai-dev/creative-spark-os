import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LeadForm from "./LeadForm";

interface CTASectionProps {
  onOpenForm: () => void;
}

const CTASection = ({ onOpenForm }: CTASectionProps) => {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - CTA text */}
          <div className="lg:sticky lg:top-24">
            <h2 className="headline mb-6">
              Ready to scale your creative output?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join India's leading performance agencies. Get early access and founding rates.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Sign up in 30 seconds",
                "We'll reach out within 2 business days",
                "Get exclusive early access",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="lg:hidden">
              <Button variant="hero" size="xl" onClick={onOpenForm} className="w-full">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right - Inline form */}
          <div className="p-8 rounded-2xl border-2 border-foreground">
            <h3 className="text-xl font-bold mb-6">Get Early Access</h3>
            <LeadForm variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
