import { Download, Play } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative animate-float">
      {/* Phone frame */}
      <div className="relative w-72 h-[580px] bg-secondary rounded-[3rem] p-2 shadow-2xl glow-effect">
        {/* Inner screen */}
        <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-secondary rounded-b-2xl z-20" />
          
          {/* Video content */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background flex flex-col">
            {/* Top bar */}
            <div className="pt-10 px-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Ad Preview</span>
                <span className="text-xs text-primary font-medium">0:15</span>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 relative px-4">
              {/* Product image placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-primary/30 rounded-xl flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Hook text overlay */}
              <div className="space-y-3">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                  <p className="text-lg font-bold text-foreground">
                    "Used to cost ₹999"
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    Now just ₹499
                  </p>
                </div>

                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    I stopped overpaying. Here's how...
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-4 bg-gradient-to-t from-background via-background to-transparent">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 bg-primary rounded-full py-3 px-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-primary/90 transition-colors">
                  <span className="text-sm font-semibold text-primary-foreground">Shop Now</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                  <Download className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground">Auto-generated</p>
        <p className="text-sm font-semibold text-primary">in 2 min</p>
      </div>

      <div className="absolute -bottom-4 -left-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground">Export ready</p>
        <p className="text-sm font-semibold text-foreground">1080×1920</p>
      </div>
    </div>
  );
};

export default PhoneMockup;
