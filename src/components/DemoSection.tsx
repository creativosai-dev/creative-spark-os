import { Play, Download } from "lucide-react";
import { Button } from "./ui/button";

const demos = [
  {
    id: 1,
    title: "Before → After",
    subtitle: "Product transformation",
    hook: "Used to cost ₹999 — now ₹499",
  },
  {
    id: 2,
    title: "Problem Rant",
    subtitle: "Pattern interrupt",
    hook: "Tired of slow delivery?",
  },
  {
    id: 3,
    title: "Social Proof",
    subtitle: "Trust builder",
    hook: "Thousands served — Riya, Bengaluru",
  },
];

const DemoSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="headline mb-6">
            How it looks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sample outputs. Each follows proven UGC patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {demos.map((demo) => (
            <div key={demo.id} className="group">
              {/* Phone-style container */}
              <div className="aspect-[9/16] rounded-3xl bg-background border-2 border-border overflow-hidden relative group-hover:border-foreground transition-colors">
                {/* Video placeholder */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Top label */}
                  <div className="p-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {demo.subtitle}
                    </span>
                  </div>

                  {/* Play overlay */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 text-background fill-background" />
                    </div>
                  </div>

                  {/* Hook text */}
                  <div className="p-4 space-y-3">
                    <div className="bg-foreground text-background rounded-lg p-3">
                      <p className="text-sm font-bold">
                        "{demo.hook}"
                      </p>
                    </div>
                    <p className="text-xs text-center text-muted-foreground font-semibold">
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
