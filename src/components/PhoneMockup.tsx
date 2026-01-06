import { Download, Play } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-72 h-[580px] bg-primary rounded-[3rem] p-2 shadow-2xl">
        {/* Inner screen */}
        <div className="relative w-full h-full bg-card rounded-[2.5rem] overflow-hidden border border-border">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-primary rounded-b-2xl z-20" />
          
          {/* Video content */}
          <div className="absolute inset-0 flex flex-col">
            {/* Top bar */}
            <div className="pt-10 px-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">Ad Preview</span>
                <span className="text-xs font-bold text-foreground">0:15</span>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 relative px-4">
              {/* Product image placeholder */}
              <div className="w-full h-48 bg-muted rounded-2xl flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                </div>
              </div>

              {/* Hook text overlay */}
              <div className="space-y-3">
                <div className="bg-primary text-primary-foreground rounded-lg p-4">
                  <p className="text-sm font-medium mb-1">
                    "Used to cost ₹999"
                  </p>
                  <p className="text-2xl font-black">
                    Now just ₹499
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">
                    I stopped overpaying. Here's how...
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 bg-accent text-accent-foreground rounded-lg py-3 px-6 flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 transition-all">
                  <span className="text-sm font-bold">Shop Now</span>
                </div>
                <div className="w-12 h-12 rounded-lg border-2 border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                  <Download className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground">Auto-generated</p>
        <p className="text-sm font-bold text-primary">in 2 min</p>
      </div>

      <div className="absolute -bottom-4 -left-8 bg-primary text-primary-foreground rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs opacity-80">Export ready</p>
        <p className="text-sm font-bold">1080×1920</p>
      </div>
    </div>
  );
};

export default PhoneMockup;
