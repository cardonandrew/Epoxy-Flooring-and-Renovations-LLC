import { useState } from "react";
import { ArrowRight, CheckCircle, Layers } from "lucide-react";

const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const epoxyProducts = [
  {
    id: 1,
    name: "Flake / Chip Epoxy",
    tagline: "Texture. Grip. Style.",
    description:
      "Decorative vinyl flakes broadcast into a high-build epoxy base, sealed with a UV-stable polyaspartic topcoat. The go-to epoxy system for Utah County garages — slip-resistant, durable, and stunning.",
    image: "/epoxy-hero.jpg",
    features: ["Slip-resistant texture", "Hides surface imperfections", "UV-stable topcoat", "Most popular Utah garage floor"],
    badge: "Most Popular",
    color: "oklch(0.82 0.18 170)",
  },
  {
    id: 2,
    name: "Solid Color Epoxy",
    tagline: "Clean. Bold. Durable.",
    description:
      "A smooth, high-gloss uniform finish that transforms bare concrete into a professional-grade surface. Available in a wide range of custom colors — ideal for garages, shops, and commercial spaces.",
    image: "/hangar.jpg",
    features: ["Wide custom color selection", "High-gloss, smooth finish", "Chemical & oil resistant", "Easy to clean & maintain"],
    badge: "Great Value",
    color: "oklch(0.75 0.2 200)",
  },
  {
    id: 3,
    name: "Custom Commercial / Industrial",
    tagline: "Heavy-Duty. Built for Business.",
    description:
      "High-build epoxy and polyurea systems engineered for warehouses, retail spaces, auto shops, and industrial facilities. We design a coating solution around your specific traffic, chemical exposure, and aesthetic requirements.",
    image: "/commercial.jpg",
    features: ["Custom color & texture options", "Heavy foot & vehicle traffic rated", "Chemical & oil spill resistant", "Scalable for any commercial size"],
    badge: "Commercial Grade",
    color: "oklch(0.65 0.22 280)",
  },
];

const additionalServices = [
  {
    id: 4,
    name: "Garage Painting",
    tagline: "Fresh Look. Fast Turnaround.",
    description:
      "Full interior garage painting — walls, ceilings, and trim. Pair it with your new epoxy floor for a complete transformation. One crew, one visit.",
    image: "/paint.jpg",
    features: ["Walls, ceiling & trim", "Premium paint products", "Pairs with epoxy floors"],
    badge: "Popular Add-On",
  },
  {
    id: 5,
    name: "Small Concrete Jobs",
    tagline: "Cracks Fixed. Surface Restored.",
    description:
      "Crack repair, patching, grinding, and small concrete pours — the prep work that makes your epoxy floor last for years.",
    image: "/crack.jpg",
    features: ["Crack & spall repair", "Surface grinding & leveling", "Pre-coating prep included"],
    badge: "Foundation First",
  },
  {
    id: 6,
    name: "Trash & Junk Removal",
    tagline: "Clear It Out. Start Fresh.",
    description:
      "We'll haul away the junk before your floor install begins — one crew handles everything so you don't have to coordinate.",
    image: "/junk.jpg",
    features: ["Full garage cleanouts", "Paired with floor installs", "Fast scheduling"],
    badge: "Convenient",
  },
  {
    id: 7,
    name: "Powder Coatings",
    tagline: "Durable Finish. Premium Look.",
    description:
      "Chip-resistant powder coating for metal surfaces, shelving, and garage hardware — perfect for completing your garage upgrade.",
    image: "/powder.jpg",
    features: ["Metal surfaces & hardware", "Chip & rust resistant", "Wide color range"],
    badge: "Premium Finish",
  },
];

const EpoxyCard = ({ product }: { product: typeof epoxyProducts[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-sm border border-border card-gradient cursor-pointer transition-all duration-500 neon-border-hover flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
        {product.badge}
      </div>

      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={`${product.name} epoxy floor Utah County`}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-1">{product.tagline}</p>
        <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="group/btn flex items-center gap-2 text-sm font-bold text-primary-foreground bg-primary px-4 py-2.5 rounded-sm w-full justify-center hover:bg-primary/90 transition-all duration-200"
        >
          Get a Free Estimate
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const AdditionalCard = ({ product }: { product: typeof additionalServices[0] }) => (
  <div className="group relative overflow-hidden rounded-sm border border-border card-gradient cursor-pointer transition-all duration-300 neon-border-hover flex flex-col">
    <div className="absolute top-3 left-3 z-20 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-border">
      {product.badge}
    </div>
    <div className="relative h-36 overflow-hidden flex-shrink-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-0.5">{product.tagline}</p>
      <h3 className="text-base font-black text-foreground mb-2 tracking-tight">{product.name}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{product.description}</p>
      <ul className="space-y-1.5 mb-4">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        onClick={scrollToContact}
        className="group/btn flex items-center gap-2 text-xs font-bold text-primary border border-primary/30 px-3 py-2 rounded-sm w-full justify-center hover:bg-primary/10 transition-all duration-200"
      >
        Get a Quote
        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

const ProductsSection = () => {
  return (
    <section id="products" className="py-28 px-6 relative" aria-labelledby="products-heading">
      <div className="absolute inset-0 hero-gradient opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── EPOXY FLOORING HEADER ── */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Epoxy & Resin Floor Systems</p>
          <h2 id="products-heading" className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            UTAH COUNTY'S <span className="text-primary neon-glow">EPOXY FLOOR EXPERTS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We specialize in professional epoxy and resin floor coatings for garages, shops, and commercial spaces across Provo, Orem, Lehi, and all of Utah County.
          </p>
        </div>

        {/* ── EPOXY PRODUCTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {epoxyProducts.map((product) => (
            <EpoxyCard key={product.id} product={product} />
          ))}
        </div>

        {/* ── DIVIDER: ADDITIONAL SERVICES ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Additional Services</span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>
        <p className="text-center text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
          We handle everything your garage renovation needs — so you make one call and we handle it all.
        </p>

        {/* ── ADDITIONAL SERVICES GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalServices.map((product) => (
            <AdditionalCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
