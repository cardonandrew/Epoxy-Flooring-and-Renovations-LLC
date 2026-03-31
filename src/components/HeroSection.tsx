import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const scrollTo = (id: string) => {
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, 50);
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Hero radial gradient overlay */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Horizontal scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ animation: "scanline 8s linear infinite", top: "0%" }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/40" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/40" />

      {/* Flooring image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/epoxy-hero.jpg"
          alt="Real Epoxy Garage Floor by Epoxy Flooring and Renovations"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 md:pt-28">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-primary mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Utah County's #1 Epoxy Floor Specialists
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          <span className="block text-foreground">Epoxy Garage Floors</span>
          <span className="block neon-glow text-primary">Built to Impress.</span>
          <span className="block text-foreground">Utah County's</span>
          <span className="block text-muted-foreground">Trusted Crew.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Flake chip epoxy, solid color epoxy &amp; resin floor coatings for garages, shops, and commercial spaces. Serving Provo, Orem, Lehi &amp; all of Utah County with free on-site estimates and honest pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 animate-pulse-neon"
          >
            Request Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+18018886371"
            className="flex items-center gap-2 border border-border text-foreground font-medium text-sm px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call 801-888-6371
          </a>
        </div>

        {/* Internal navigation links */}
        <nav aria-label="Page sections" className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "Epoxy Services", path: "/services", id: "products" },
            { label: "Gallery", path: "/gallery", id: "gallery" },

            { label: "Service Area", path: "/service-area", id: "service-area" },
            { label: "About Us", path: "/about", id: "about" },
            { label: "Get a Quote", path: "/contact", id: "contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground hover:text-primary border border-border hover:border-primary/40 px-4 py-1.5 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Value pillars */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto border border-border/50 bg-card/50 backdrop-blur-sm rounded-sm p-6">
          {[
            { value: "Free", label: "On-Site Estimates" },
            { value: "Flake & Solid", label: "Epoxy Systems" },
            { value: "5★ Rated", label: "Utah County Crew" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-primary neon-glow">{stat.value}</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        to="/services"
        onClick={() => scrollTo("products")}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown className="w-6 h-6" />
      </Link>
    </section>
  );
};

export default HeroSection;
