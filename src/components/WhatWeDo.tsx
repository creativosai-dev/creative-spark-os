import { Film, Brain, Zap } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Asset-first UGC assembly",
    description: "Use your videos & images first, then stock fallback. Your brand assets, your authenticity.",
  },
  {
    icon: Brain,
    title: "Ad psychology baked in",
    description: "Hook → script → assemble → variations. Every ad follows proven performance patterns.",
  },
  {
    icon: Zap,
    title: "Scale, don't spend",
    description: "Create dozens of ad variants in minutes. More tests, less cost, faster learnings.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What <span className="text-gradient">CreativOS</span> Does
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your brand assets into scroll-stopping UGC-style ads. No fake avatars. No complex editing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-8 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
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

export default WhatWeDo;
