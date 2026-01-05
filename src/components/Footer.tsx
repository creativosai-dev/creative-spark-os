import { ExternalLink } from "lucide-react";

const sources = [
  {
    label: "Agency retainer costs (India)",
    url: "https://kleverish.com/marketing-agency-pricing/",
    description: "₹25k–₹75k monthly",
  },
  {
    label: "UGC creator fees",
    url: "https://collabstr.com/blog/ugc-creator-rates",
    description: "$150–$300 per piece",
  },
  {
    label: "Indian UGC agency packages",
    url: "https://www.ugcfarm.in",
    description: "₹15,000+ per video",
  },
  {
    label: "Video editing rates (India)",
    url: "https://www.urbanpro.com/video-editing",
    description: "₹250–₹5,000 per 30s",
  },
  {
    label: "Ad production benchmarks",
    url: "https://www.vidico.com/blog/video-production-costs/",
    description: "Industry averages",
  },
];

const Footer = () => {
  return (
    <footer id="sources" className="py-16 bg-foreground text-background">
      <div className="section-container">
        {/* Sources */}
        <div className="mb-16">
          <h3 className="text-lg font-bold mb-8">Sources & References</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map((source) => (
              <a
                key={source.label}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-background/50 group-hover:text-background flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold group-hover:underline">
                    {source.label}
                  </p>
                  <p className="text-xs text-background/50">{source.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-background/20">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black">CreativOS</span>
          </div>
          
          <p className="text-sm text-background/60 text-center sm:text-right">
            We will not share your email. CreativOS is a product by [Your Company Name].
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} CreativOS. All rights reserved. • creativos.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
