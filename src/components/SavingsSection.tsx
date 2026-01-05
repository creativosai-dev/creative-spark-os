import { ExternalLink, TrendingDown, Info } from "lucide-react";

const SavingsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The <span className="text-gradient">Numbers</span> That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How much agencies spend today — and how much CreativOS saves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Cost Card */}
          <div className="card-elevated p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-destructive rotate-180" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Traditional Approach</h3>
                <p className="text-sm text-muted-foreground">Per 15–30s UGC ad</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start p-4 rounded-lg bg-secondary/50">
                <div>
                  <p className="font-medium">Freelancer editing</p>
                  <p className="text-sm text-muted-foreground">Beginner → Mid-level</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹250 – ₹5,000</p>
                  <a 
                    href="https://www.urbanpro.com/video-editing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Source <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start p-4 rounded-lg bg-secondary/50">
                <div>
                  <p className="font-medium">UGC creator fee</p>
                  <p className="text-sm text-muted-foreground">Market average</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹12,000 – ₹25,000</p>
                  <a 
                    href="https://collabstr.com/blog/ugc-creator-rates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Source <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start p-4 rounded-lg bg-secondary/50">
                <div>
                  <p className="font-medium">Full managed package</p>
                  <p className="text-sm text-muted-foreground">Agency UGC bundles</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹15,000 – ₹90,000</p>
                  <a 
                    href="https://www.ugcfarm.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Source <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CreativOS Cost Card */}
          <div className="card-elevated p-8 border-primary/30 glow-effect">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">CreativOS Approach</h3>
                <p className="text-sm text-muted-foreground">Per 15–30s UGC ad</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">Estimated Cost</p>
                  <p className="text-2xl font-bold text-primary">₹50 – ₹300</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  API + render + storage — modeled for scale.
                </p>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10">
                  <span className="text-2xl font-bold text-primary">80% – 99%</span>
                  <span className="text-sm text-muted-foreground">savings vs. typical creator-led cost</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Estimate based on our operational MVP model (LLM for copy, TTS, CPU-based rendering). Exact cost depends on volume.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          *Estimates are based on public market data and our internal MVP cost model. 
          <a href="#sources" className="text-primary hover:underline ml-1">See sources below.</a>
        </p>
      </div>
    </section>
  );
};

export default SavingsSection;
