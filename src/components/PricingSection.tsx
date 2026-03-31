import { CheckCircle, Zap } from "lucide-react";

const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const plans = [
  {
    name: "Essential",
    subtitle: "Single Service",
    price: "Free Estimate",
    unit: "no obligation",
    description: "Perfect for a single-service job — one floor, one paint, one removal. We quote it honestly and get it done right.",
    features: [
      "One service of your choice",
      "Surface prep included",
      "Professional installation",
      "Clean job site",
      "Satisfaction guaranteed",
    ],
    popular: false,
    cta: "Get a Quote",
  },
  {
    name: "Garage Package",
    subtitle: "Full Garage Makeover",
    price: "Best Value",
    unit: "bundled savings",
    description: "Combine your epoxy floor, garage paint, and any add-ons into one seamless project. Our most popular option.",
    features: [
      "Epoxy floor (flake or solid)",
      "Interior painting (walls & ceiling)",
      "Basic crack & surface prep",
      "Coordinated single crew",
      "Done in as little as 2 days",
      "Priority scheduling",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Full Renovation",
    subtitle: "Commercial & Full-Service",
    price: "Custom Quote",
    unit: "tailored to your project",
    description: "Larger spaces, multiple services, or commercial jobs — we scope it out and build a plan that fits your budget.",
    features: [
      "Multi-service coordination",
      "Concrete repair & prep",
      "Powder coating options",
      "Trash & junk removal",
      "Commercial-grade materials",
      "Flexible scheduling",
    ],
    popular: false,
    cta: "Request Quote",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-28 px-6 relative" aria-labelledby="pricing-heading">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Transparent Pricing</p>
          <h2 id="pricing-heading" className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            INVEST IN <span className="text-primary neon-glow">YOUR SPACE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Every job starts with a free on-site estimate so you know exactly what you're getting.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-sm border transition-all duration-300 neon-border-hover ${
                plan.popular
                  ? "border-primary bg-card neon-border scale-105"
                  : "border-border card-gradient"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  <Zap className="w-3 h-3" />
                  Best Value
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                {/* Plan header */}
                <div className="mb-6">
                  <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-1">{plan.subtitle}</p>
                  <h3 className="text-2xl font-black text-foreground tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-border">
                  <div className="text-3xl font-black text-primary leading-tight">{plan.price}</div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.unit}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className={`w-full block text-center font-bold tracking-widest uppercase text-sm py-3 rounded-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary/40 text-primary hover:bg-primary/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          * All pricing is determined after a free on-site estimate. Final cost depends on scope, square footage, and selected services.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
