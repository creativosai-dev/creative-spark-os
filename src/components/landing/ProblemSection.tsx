import { Clock, DollarSign, Brain, Shuffle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hiring UGC creators is slow",
    description: "Finding, briefing, and waiting for creators takes 2-4 weeks per campaign.",
    stat: "2-4 weeks",
    statLabel: "average turnaround",
  },
  {
    icon: DollarSign,
    title: "Video production is expensive",
    description: "Professional UGC videos cost ₹15,000-₹50,000+ per video. Testing at scale is unaffordable.",
    stat: "₹15-50K",
    statLabel: "per video",
  },
  {
    icon: Brain,
    title: "Editors don't understand ads",
    description: "Most editors create pretty videos, not high-converting ads. No ad psychology = no performance.",
    stat: "70%",
    statLabel: "ads underperform",
  },
  {
    icon: Shuffle,
    title: "AI tools create random content",
    description: "Generic AI video tools generate content without strategy. Random videos don't convert.",
    stat: "Low",
    statLabel: "conversion rates",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="headline text-foreground mb-4">
            Why agencies struggle with
            <span className="text-destructive"> creative at scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Performance marketing teams face the same bottlenecks every month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Problem Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-destructive font-bold text-sm">{index + 1}</span>
              </div>

              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {problem.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-2xl font-bold text-destructive">{problem.stat}</p>
                <p className="text-xs text-muted-foreground">{problem.statLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Chaos vs Clarity */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-4">Without CreativOS</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                Weeks of back-and-forth with creators
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                High costs limit testing variations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                Inconsistent ad performance
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                Scaling creative = scaling headcount
              </li>
            </ul>
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-4">With CreativOS</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                Generate ads in minutes, not weeks
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                Unlimited variants at fixed cost
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                Ad psychology framework built-in
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                Scale creative without scaling team
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
