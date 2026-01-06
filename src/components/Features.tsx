import { Rocket, Wallet, Building2 } from "lucide-react";

const features = [
  {
    icon: Rocket,
    stat: "5×",
    title: "More tests shipped",
    description: "More iterations, more learnings, faster wins.",
  },
  {
    icon: Wallet,
    stat: "90%",
    title: "Cost reduction",
    description: "No creator fees, no editing bills, just results.",
  },
  {
    icon: Building2,
    stat: "∞",
    title: "Scalable workspaces",
    description: "Manage clients, assets, credits, and exports.",
  },
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="headline mb-6">
            Built for performance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-card border border-border"
            >
              <div className="text-7xl font-black text-primary mb-4">
                {feature.stat}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
