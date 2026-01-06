import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onOpenForm: () => void;
}

const plans = [
  {
    name: "Starter",
    price: "₹3,999",
    period: "/month",
    description: "For individual marketers and small teams getting started.",
    credits: "50 ad credits/month",
    features: [
      "50 UGC-style ads/month",
      "3 ad psychology frameworks",
      "Basic brand kit upload",
      "720p export quality",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹11,999",
    period: "/month",
    description: "For growing brands and agencies running multiple campaigns.",
    credits: "200 ad credits/month",
    features: [
      "200 UGC-style ads/month",
      "All 10+ psychology frameworks",
      "Advanced brand asset library",
      "1080p HD exports",
      "Multi-variant generation",
      "Priority support",
      "Performance analytics",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Agency Pro",
    price: "₹29,999",
    period: "/month",
    description: "For agencies managing multiple clients at scale.",
    credits: "Unlimited ads",
    features: [
      "Unlimited UGC-style ads",
      "All psychology frameworks",
      "Multi-client workspaces",
      "Team collaboration",
      "White-label exports",
      "API access",
      "Dedicated success manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = ({ onOpenForm }: PricingSectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="headline text-foreground mb-4">
            Simple, credit-based
            <span className="text-primary"> pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No unlimited abuse. Built for professionals who value quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-primary/5 scale-105 shadow-xl"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <div className="px-4 py-2 rounded-lg bg-muted/50 text-center mb-6">
                <span className="text-sm font-semibold text-foreground">{plan.credits}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenForm}
                className={`w-full h-12 font-semibold ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices in INR. Annual billing available with 20% discount. GST extra.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
