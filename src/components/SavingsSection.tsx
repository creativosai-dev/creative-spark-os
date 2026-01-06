import { ExternalLink, ArrowDown, Info } from "lucide-react";

const SavingsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="headline mb-6">
            The numbers that matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How much agencies spend today — and how much you save.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Cost Card */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Traditional Approach
              </div>
              <div className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                Per 15–30s ad
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start p-4 rounded-xl bg-muted">
                <div>
                  <p className="font-semibold text-foreground">Freelancer editing</p>
                  <p className="text-sm text-muted-foreground">Beginner → Mid</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-foreground">₹250 – ₹5,000</p>
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

              <div className="flex justify-between items-start p-4 rounded-xl bg-muted">
                <div>
                  <p className="font-semibold text-foreground">UGC creator fee</p>
                  <p className="text-sm text-muted-foreground">Market average</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-foreground">₹12,000 – ₹25,000</p>
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

              <div className="flex justify-between items-start p-4 rounded-xl bg-muted">
                <div>
                  <p className="font-semibold text-foreground">Managed package</p>
                  <p className="text-sm text-muted-foreground">Agency UGC</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-foreground">₹15,000 – ₹90,000</p>
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
          <div className="p-8 rounded-2xl border-2 border-accent bg-accent/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-sm font-bold uppercase tracking-wider text-accent">
                With CreativOS
              </div>
              <div className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground font-semibold">
                Per 15–30s ad
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold text-foreground">Estimated Cost</p>
                  <p className="text-3xl font-black text-primary">₹50 – ₹300</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  API + render + storage — modeled for scale.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <ArrowDown className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-accent">80% – 99%</span>
                    <span className="text-sm text-muted-foreground ml-2">savings</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Based on our MVP model (LLM, TTS, CPU rendering). Exact cost depends on volume.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          *Estimates based on public market data and internal cost model. 
          <a href="#sources" className="text-primary hover:underline ml-1">See sources below.</a>
        </p>
      </div>
    </section>
  );
};

export default SavingsSection;
