import { Shield, Clock, Award, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Built to Last",
    description: "We use industrial-grade materials and proven systems trusted by homeowners and businesses alike. No cutting corners.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most jobs are completed in 1–2 days. We work efficiently so you can get back to using your space fast.",
  },
  {
    icon: Award,
    title: "Skilled Craftsmen",
    description: "Every project is handled personally by our own trained crew — no subcontractors, no strangers in your home.",
  },
  {
    icon: Users,
    title: "Local Business",
    description: "We're a Utah-based small business that puts our name on every job. Your satisfaction is how we grow.",
  },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "We visit your space, assess the floor condition, and discuss your vision and goals." },
  { step: "02", title: "Custom Proposal", desc: "You receive a clear quote with service details, timeline, and everything included." },
  { step: "03", title: "Professional Install", desc: "Our crew preps, primes, and applies your system with the right tools and technique." },
  { step: "04", title: "Final Walkthrough", desc: "We inspect the finished job together. You don't pay until you're completely satisfied." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1600&auto=format&fit=crop&q=80"
          alt="Epoxy Floor Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Who We Are</p>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
              YOUR LOCAL <span className="text-primary neon-glow">UTAH EPOXY CREW.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Epoxy Flooring and Renovations was built on a simple belief: every Utah County homeowner deserves a professional-grade epoxy floor at a fair price. We're a small local crew that takes pride in every flake chip, solid color, and resin coating we install — no franchises, no shortcuts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our primary focus is epoxy and resin floor coatings — flake chip, solid color, and polyaspartic systems built for Utah's climate. We also offer garage painting, concrete prep, trash removal, and powder coatings so you can complete your entire renovation with one crew and one call.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 blur-2xl rounded-sm" />
            <img
              src="/image10.jpg"
              alt="Real epoxy garage floor installation by Epoxy Flooring and Renovations"
              className="relative z-10 w-full h-72 object-cover rounded-sm border border-border"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-card/90 backdrop-blur-sm border border-primary/30 px-4 py-3 rounded-sm neon-border">
              <div className="text-sm font-black text-primary uppercase tracking-widest">Utah County & SLC</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase">Service Area</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-sm border border-border card-gradient hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div>
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Our Process</p>
            <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              FROM QUOTE TO <span className="text-primary neon-glow">DONE RIGHT</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-start p-6 rounded-sm border border-border card-gradient">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-10" />
                )}
                <div className="text-4xl font-black text-primary/20 mb-3 leading-none">{s.step}</div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
