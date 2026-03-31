import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jake M.",
    role: "Homeowner, Provo UT — Flake Epoxy Garage Floor",
    quote:
      "We had our garage floor done with the flake chip epoxy and it completely transformed the space. The crew was professional, finished in two days, and the floor looks incredible. Best home upgrade we've done.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
  },
  {
    name: "Sandra K.",
    role: "Business Owner, Orem UT — Solid Color Epoxy",
    quote:
      "I needed a clean, professional-looking floor for my shop. They installed a solid color epoxy system in one day and it looks absolutely stunning. Highly recommend for any Utah County business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
  },
  {
    name: "Tyler R.",
    role: "Homeowner, Lehi UT — Polyaspartic Coating",
    quote:
      "After a bad winter ruined our old floor coating, we went with the polyaspartic system. It's been through two Utah winters now with zero peeling or cracking. These guys know what works in Utah's climate.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            REAL UTAH FLOORS,{" "}<span className="text-primary neon-glow">REAL RESULTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-sm border border-border card-gradient hover:border-primary/40 transition-all duration-300 group flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-border"
                />
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
