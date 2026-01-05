import { Upload, Sparkles, Clapperboard, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload brand assets",
    description: "Drop your videos, images, and brand kit.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI selects hooks & scripts",
    description: "System picks proven hooks matched to your product.",
  },
  {
    icon: Clapperboard,
    step: "03",
    title: "Auto-assemble videos",
    description: "Vertical UGC-style videos with text overlays.",
  },
  {
    icon: Download,
    step: "04",
    title: "Download & run ads",
    description: "Export 1080×1920. Upload to Meta or TikTok.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="headline mb-6">
            How it works
          </h2>
          <p className="text-xl text-background/70 max-w-2xl mx-auto">
            From brand assets to ad-ready videos in four steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-background/20" />
              )}
              
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-background flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-foreground" />
                </div>
                <div className="text-5xl font-black text-background/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">
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
