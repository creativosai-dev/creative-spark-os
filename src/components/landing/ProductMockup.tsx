import { Upload, Sparkles, Play, Layers, CheckCircle } from "lucide-react";

const ProductMockup = () => {
  return (
    <div className="relative">
      {/* Main Dashboard */}
      <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-lg bg-background text-xs text-muted-foreground">
              app.creativos.ai
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-semibold text-foreground">New Campaign</h4>
              <p className="text-sm text-muted-foreground">D2C Brand • Meta Ads</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                3 variants ready
              </span>
            </div>
          </div>

          {/* Asset Upload Area */}
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center p-3">
              <Upload className="w-6 h-6 text-primary mb-2" />
              <span className="text-xs text-center text-muted-foreground">Product Video</span>
              <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-dashed border-accent/30 flex flex-col items-center justify-center p-3">
              <Sparkles className="w-6 h-6 text-accent mb-2" />
              <span className="text-xs text-center text-muted-foreground">Brand Assets</span>
              <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
            </div>
            <div className="aspect-square rounded-lg bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center p-3">
              <Layers className="w-6 h-6 text-muted-foreground mb-2" />
              <span className="text-xs text-center text-muted-foreground">+ Add more</span>
            </div>
          </div>

          {/* Ad Preview Strip */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Generated Variants</span>
              <span className="text-xs text-primary">View all →</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-[9/16] rounded-lg bg-gradient-to-br from-foreground/5 to-foreground/10 overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2">Variant {i}</span>
                  </div>
                  {i === 1 && (
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-accent text-[8px] font-medium text-accent-foreground">
                      Best
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              Export All
            </button>
            <button className="py-2.5 px-4 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
              Regenerate
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute -right-4 top-1/4 bg-card rounded-xl border border-border shadow-lg p-4 animate-fade-in hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">3.2x</p>
            <p className="text-xs text-muted-foreground">Avg. ROAS</p>
          </div>
        </div>
      </div>

      {/* Floating AI Badge */}
      <div className="absolute -left-4 bottom-1/3 bg-primary text-primary-foreground rounded-xl shadow-lg px-4 py-3 animate-fade-in hidden lg:block">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI Psychology Applied</span>
        </div>
      </div>
    </div>
  );
};

export default ProductMockup;
