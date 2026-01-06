import { Check, X } from "lucide-react";

const Differentiators = () => {
  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="headline mb-6">
              What makes us different
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              CreativOS is built with a clear philosophy: authenticity over shortcuts, control over chaos.
            </p>

            <div className="space-y-5">
              {[
                { title: "Asset-first philosophy", desc: "Your brand assets get prioritized. Stock is a fallback." },
                { title: "Systemized hooks", desc: "Proven frameworks, not freeform generative chaos." },
                { title: "Controlled variations", desc: "You control what gets generated. Full transparency." },
                { title: "No fake avatars", desc: "Authenticity first. No synthetic faces or deepfakes." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-background">
            <div className="space-y-4">
              {[
                "Fake AI avatars",
                "Random GPT scripts",
                "Expensive GPU rendering",
                "Black-box generation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <X className="w-5 h-5 text-destructive/70" />
                  <span className="text-muted-foreground line-through">{item}</span>
                </div>
              ))}
              
              <div className="border-t border-border my-6 pt-6">
                {[
                  "Your brand assets first",
                  "Proven hook frameworks",
                  "CPU-based, cost-efficient",
                  "Full control & transparency",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
