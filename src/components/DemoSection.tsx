import { Play, Download } from "lucide-react";
import { Button } from "./ui/button";

const demos = [
  {
    id: 1,
    title: "Before → After",
    subtitle: "Product transformation",
    hook: "Used to cost ₹999 — now ₹499",
    alt: "Hands holding product, text overlay: Used to cost ₹999 — now ₹499",
  },
  {
    id: 2,
    title: "Problem Rant",
    subtitle: "Pattern interrupt",
    hook: "Tired of slow delivery?",
    alt: "Quick cuts of product in use with bold text: Tired of slow delivery?",
  },
  {
    id: 3,
    title: "Social Proof",
    subtitle: "Trust builder",
    hook: "Thousands served — Riya, Bengaluru",
    alt: "Badge: Thousands served. Quote: Saved me time & money — Riya, Bengaluru",
  },
];

const DemoSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Looks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demo ads — sample outputs (placeholders). Each follows proven UGC patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {demos.map((demo) => (
            <div key={demo.id} className="group">
              {/* Phone-style container */}
              <div className="aspect-[9/16] rounded-3xl bg-card border border-border overflow-hidden relative shadow-lg group-hover:shadow-xl transition-shadow">
                {/* Video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background flex flex-col">
                  {/* Top label */}
                  <div className="p-4">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {demo.subtitle}
                    </span>
                  </div>

                  {/* Play overlay */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors cursor-pointer">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>

                  {/* Hook text */}
                  <div className="p-4 space-y-3">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                      <p className="text-sm font-semibold text-foreground">
                        "{demo.hook}"
                      </p>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      {demo.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Download button */}
              <div className="mt-4 flex justify-center">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
