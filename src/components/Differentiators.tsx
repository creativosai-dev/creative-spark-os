import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Asset-first philosophy",
    description: "Your brand assets get prioritized. Stock is a fallback, not the default.",
  },
  {
    title: "Systemized hooks",
    description: "Proven hook frameworks, not freeform generative chaos. Performance-backed patterns.",
  },
  {
    title: "Controlled variations",
    description: "You control what gets generated. Credits, exports, and versions are transparent.",
  },
  {
    title: "No fake avatars",
    description: "Authenticity first. We don't generate synthetic faces or deepfake creators.",
  },
];

const Differentiators = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              CreativOS is built with a clear philosophy: authenticity over shortcuts, control over chaos.
            </p>

            <div className="space-y-6">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-elevated p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm line-through text-muted-foreground">Fake AI avatars</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm line-through text-muted-foreground">Random GPT scripts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm line-through text-muted-foreground">Expensive GPU rendering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm line-through text-muted-foreground">Black-box generation</span>
                </div>
                
                <div className="border-t border-border my-6 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium">Your brand assets first</span>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium">Proven hook frameworks</span>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium">CPU-based, cost-efficient</span>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium">Full control & transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
