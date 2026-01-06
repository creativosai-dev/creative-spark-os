import { Check, X, Minus } from "lucide-react";

const comparisons = [
  {
    feature: "Time to first ad",
    creativos: "10 minutes",
    creators: "2-4 weeks",
    aiTools: "1-2 hours",
    manual: "3-5 days",
  },
  {
    feature: "Cost per video",
    creativos: "₹50-300",
    creators: "₹15,000-50,000",
    aiTools: "₹500-2,000",
    manual: "₹5,000-15,000",
  },
  {
    feature: "Ad psychology built-in",
    creativos: true,
    creators: false,
    aiTools: false,
    manual: "Varies",
  },
  {
    feature: "Multi-variant generation",
    creativos: "20+ variants",
    creators: "1-3 variants",
    aiTools: "5-10 variants",
    manual: "1-2 variants",
  },
  {
    feature: "Brand consistency",
    creativos: true,
    creators: "Varies",
    aiTools: false,
    manual: true,
  },
  {
    feature: "Performance-first approach",
    creativos: true,
    creators: false,
    aiTools: false,
    manual: "Varies",
  },
  {
    feature: "Scale without hiring",
    creativos: true,
    creators: false,
    aiTools: true,
    manual: false,
  },
];

const renderValue = (value: string | boolean) => {
  if (value === true) return <Check className="w-5 h-5 text-green-600 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-destructive mx-auto" />;
  if (value === "Varies") return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
  return <span className="text-sm">{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why CreativOS
          </span>
          <h2 className="headline text-foreground mb-4">
            See how we
            <span className="text-primary"> stack up</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare CreativOS against other ways agencies create UGC-style ads.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-1">
                      CreativOS
                    </span>
                    <span className="text-xs text-muted-foreground">AI UGC Engine</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="font-semibold text-foreground">UGC Creators</span>
                    <span className="text-xs text-muted-foreground">Freelance/Agency</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="font-semibold text-foreground">Generic AI Tools</span>
                    <span className="text-xs text-muted-foreground">Video generators</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="font-semibold text-foreground">Manual Editing</span>
                    <span className="text-xs text-muted-foreground">In-house/Editors</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={row.feature} className={index % 2 === 0 ? "bg-background" : "bg-card"}>
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-center bg-primary/5 font-semibold text-primary">
                    {renderValue(row.creativos)}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderValue(row.creators)}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderValue(row.aiTools)}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderValue(row.manual)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-accent text-accent-foreground text-xs font-bold">
                Best Choice
              </span>
              CreativOS
            </h3>
            <ul className="space-y-3">
              {comparisons.map((row) => (
                <li key={row.feature} className="flex justify-between items-center">
                  <span className="text-sm text-primary-foreground/70">{row.feature}</span>
                  <span className="font-semibold">{typeof row.creativos === "boolean" ? (row.creativos ? "✓" : "✗") : row.creativos}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "UGC Creators", data: "creators" as const },
              { title: "Generic AI Tools", data: "aiTools" as const },
              { title: "Manual Editing", data: "manual" as const },
            ].map((column) => (
              <div key={column.title} className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-3">{column.title}</h4>
                <ul className="space-y-2 text-sm">
                  {comparisons.slice(0, 4).map((row) => (
                    <li key={row.feature} className="flex justify-between items-center text-muted-foreground">
                      <span className="truncate mr-2">{row.feature}</span>
                      <span>{typeof row[column.data] === "boolean" ? (row[column.data] ? "✓" : "✗") : String(row[column.data])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
