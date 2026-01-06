import { Upload, Brain, FileVideo, Layers, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Brand Assets",
    description: "Drop your product videos, images, and brand kit. Our AI analyzes everything.",
    detail: "Supports MP4, MOV, JPG, PNG",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Selects Strategy",
    description: "Our engine picks the optimal ad psychology framework based on your product and audience.",
    detail: "AIDA, PAS, FAB & more",
  },
  {
    icon: FileVideo,
    number: "03",
    title: "UGC Blueprint Created",
    description: "AI generates a scroll-stopping script with hooks, body, and CTAs designed to convert.",
    detail: "Hook → Body → CTA",
  },
  {
    icon: Layers,
    number: "04",
    title: "Auto-Assemble Videos",
    description: "Your assets are intelligently assembled into vertical UGC-style videos with text overlays.",
    detail: "9:16 ratio optimized",
  },
  {
    icon: Download,
    number: "05",
    title: "Export & Run Ads",
    description: "Download multiple variants ready for Meta, TikTok, and YouTube Shorts. No editing needed.",
    detail: "1080×1920 export",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="headline mb-4">
            From assets to ads in
            <span className="text-accent"> 5 simple steps</span>
          </h2>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            No learning curve. No editing skills needed. Just upload and generate.
          </p>
        </div>

        {/* Desktop Pipeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-foreground/20 via-accent to-primary-foreground/20" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-primary-foreground flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 -right-2 z-20 hidden lg:block">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                )}

                {/* Step Number */}
                <div className="text-4xl font-black text-primary-foreground/20 mb-2">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-primary-foreground/60 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-medium">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile List */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground flex items-center justify-center shrink-0">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 w-0.5 bg-primary-foreground/20 my-2" />
                )}
              </div>
              <div className="pb-6">
                <span className="text-sm font-bold text-accent">{step.number}</span>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-primary-foreground/60 mb-2">
                  {step.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-medium">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
