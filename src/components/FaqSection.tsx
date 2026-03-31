import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of epoxy floor systems do you install in Utah County?",
    a: "We specialize in three primary systems: flake/chip epoxy (the most popular for residential garages), solid color epoxy (for a clean, modern look), and polyaspartic/resin coatings (a fast-curing, ultra-durable topcoat). All three systems are available in a wide range of colors and are engineered for Utah's climate.",
  },
  {
    q: "What is the difference between flake epoxy and solid color epoxy?",
    a: "Flake (chip) epoxy broadcasts decorative vinyl flakes into a wet epoxy base, then seals with a clear polyaspartic topcoat — creating a textured, slip-resistant, speckle-pattern surface that hides dirt and garage grime beautifully. Solid color epoxy delivers a smooth, high-gloss uniform finish. Flake is the most popular choice for Utah County homeowners because it hides imperfections and requires less maintenance.",
  },
  {
    q: "How much does an epoxy garage floor cost in Utah County?",
    a: "Every project is unique, so we provide free on-site estimates to give you an accurate price. Cost depends on your floor's condition, square footage, and the system you choose. We believe in honest, no-surprise pricing — you'll know the full cost before we ever start. There are zero hidden fees.",
  },
  {
    q: "How long does epoxy floor installation take?",
    a: "Most residential garage epoxy floors in Utah County are completed in 1–2 days. Day one covers prep and base coat; day two applies the topcoat. You can walk on it within 24 hours and drive on it within 48–72 hours. Full cure takes about 7 days. We work efficiently to minimize disruption to your home.",
  },
  {
    q: "What epoxy system works best in Utah's climate?",
    a: "Utah's freeze-thaw cycles and heavy road salt are brutal on cheap coatings. We recommend a UV-stable polyaspartic or polyurea topcoat applied over your epoxy base — it resists fading, cracking, and salt damage. All of our epoxy systems include a professional-grade topcoat rated for Utah County's wide temperature swings.",
  },
  {
    q: "Do you offer garage painting and other services in addition to epoxy floors?",
    a: "Yes — we offer full garage painting (walls, ceilings, and trim), small concrete repair and prep work, trash and junk removal, and powder coatings for metal surfaces. Many customers bundle these with their epoxy floor for a complete garage transformation. One crew, one visit, everything done.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 px-6 relative"
      aria-label="Frequently Asked Questions about Epoxy Floors in Utah"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            EPOXY FLOOR{" "}
            <span className="text-primary neon-glow">QUESTIONS?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Answers to the most common questions about epoxy and resin floor coatings in Utah County. Don't see yours? Call us — we're always happy to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-sm border transition-all duration-300 card-gradient ${
                open === i ? "border-primary/40" : "border-border"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-bold text-foreground leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
