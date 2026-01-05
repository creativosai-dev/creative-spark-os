import { Rocket, Wallet, Building2 } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Faster creative velocity",
    description: "Ship 5× more ad tests. More iterations, more learnings, faster wins.",
    stat: "5×",
    statLabel: "more tests",
  },
  {
    icon: Wallet,
    title: "Huge cost savings",
    description: "Reduce production spend by up to 90%. No creator fees, no editing bills.",
    stat: "90%",
    statLabel: "cost savings",
  },
  {
    icon: Building2,
    title: "Agency workspaces",
    description: "Manage clients, assets, credits, and exports. Built for agency workflows.",
    stat: "∞",
    statLabel: "scalability",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything agencies need to scale their creative output.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-elevated p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="mb-6">
                <p className="text-4xl font-bold text-gradient">{feature.stat}</p>
                <p className="text-sm text-muted-foreground">{feature.statLabel}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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
