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
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="headline mb-6">
            What CreativOS does
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your brand assets into scroll-stopping UGC-style ads. No fake avatars. No complex editing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border-2 border-border hover:border-foreground transition-colors duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
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
