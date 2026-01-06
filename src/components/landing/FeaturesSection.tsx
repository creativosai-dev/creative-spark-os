import { Brain, Video, Layers, Sparkles, Download, Users, Settings, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Ad Psychology Engine",
    description: "Built-in AIDA, PAS, FAB and 10+ proven frameworks. Every ad follows psychology that converts.",
    highlight: "Core",
  },
  {
    icon: Video,
    title: "UGC-Style Blueprint",
    description: "AI generates authentic, scroll-stopping scripts with hooks, body copy, and CTAs.",
    highlight: null,
  },
  {
    icon: Sparkles,
    title: "Brand Asset Intelligence",
    description: "Upload once. AI understands your brand colors, tone, and product details automatically.",
    highlight: null,
  },
  {
    icon: Layers,
    title: "Multi-Variant Generation",
    description: "Generate 5, 10, or 20+ ad variations in one go. Test more, learn faster, scale winners.",
    highlight: "Popular",
  },
  {
    icon: Download,
    title: "Ready-to-Publish Export",
    description: "1080×1920 vertical videos optimized for Meta, TikTok, and YouTube Shorts.",
    highlight: null,
  },
  {
    icon: Users,
    title: "Agency Workflows",
    description: "Multi-client management, team collaboration, and white-label options for agencies.",
    highlight: "Agency",
  },
  {
    icon: Settings,
    title: "Custom Templates",
    description: "Save winning formulas as templates. Reuse and iterate on what works.",
    highlight: null,
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Connect ad accounts to see which variants perform best. Let data guide your creative.",
    highlight: "Soon",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="headline text-foreground mb-4">
            Built for
            <span className="text-primary"> performance marketers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed to help you create ads that convert, not just look pretty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {feature.highlight && (
                <div className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  feature.highlight === "Core" 
                    ? "bg-primary text-primary-foreground" 
                    : feature.highlight === "Popular"
                    ? "bg-accent text-accent-foreground"
                    : feature.highlight === "Agency"
                    ? "bg-green-600 text-white"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {feature.highlight}
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
