import { Upload, Sparkles, Clapperboard, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload brand assets",
    description: "Drop your videos, images, and brand kit. We prioritize your assets.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI selects hooks & scripts",
    description: "System picks proven hooks and writes scripts matched to your product.",
  },
  {
    icon: Clapperboard,
    step: "03",
    title: "Auto-assemble videos",
    description: "FFMPEG stitches vertical UGC-style videos with text overlays and CTAs.",
  },
  {
    icon: Download,
    step: "04",
    title: "Download & run ads",
    description: "Export 1080×1920 videos. Upload to Meta, TikTok, or YouTube Shorts.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From brand assets to ad-ready videos in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
