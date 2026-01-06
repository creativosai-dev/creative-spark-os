const logos = [
  { name: "GrowthHive", initials: "GH" },
  { name: "MediaScale", initials: "MS" },
  { name: "D2C Labs", initials: "D2C" },
  { name: "AdVelocity", initials: "AV" },
  { name: "ScaleSprint", initials: "SS" },
  { name: "ClickCraft", initials: "CC" },
];

const testimonials = [
  {
    quote: "We cut our creative production time by 80%. What used to take 2 weeks now happens in a day.",
    author: "Rahul K.",
    role: "Founder, Performance Agency",
    metric: "80% faster",
  },
  {
    quote: "Finally, an AI tool that understands ad psychology. Our ROAS improved significantly after switching.",
    author: "Priya M.",
    role: "Media Buyer, D2C Brand",
    metric: "2.8x ROAS",
  },
  {
    quote: "We test 10x more creatives now. The multi-variant feature alone is worth the subscription.",
    author: "Arjun S.",
    role: "Growth Lead, eCommerce",
    metric: "10x more tests",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by performance marketers across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
              >
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{logo.initials}</span>
                </div>
                <span className="font-semibold text-foreground text-sm">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Metric Badge */}
              <div className="absolute -top-3 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {testimonial.metric}
                </span>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-primary text-primary-foreground">
          {[
            { stat: "500+", label: "Agencies & Brands" },
            { stat: "50,000+", label: "Ads Generated" },
            { stat: "2.4x", label: "Avg. ROAS Improvement" },
            { stat: "85%", label: "Time Saved" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-black">{item.stat}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
