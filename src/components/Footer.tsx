import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const scrollTo = (id: string) => {
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, 50);
};

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo-new.jpeg"
                alt="Epoxy Flooring and Renovations LLC Logo"
                className="w-10 h-10 object-contain flex-shrink-0 rounded-sm"
              />
              <div className="leading-tight">
                <span className="text-sm font-black tracking-wide text-foreground uppercase">Epoxy Flooring</span>
                <span className="block text-xs font-semibold tracking-widest text-primary uppercase">&amp; Renovations</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utah County's epoxy flooring specialists. Flake chip, solid color &amp; resin coatings for garages across Provo, Orem, Lehi &amp; SLC.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-4">Services</p>
            <ul className="space-y-2.5">
              {[
                { label: "Flake / Chip Epoxy", path: "/services" },
                { label: "Solid Color Epoxy", path: "/services" },
                { label: "Polyaspartic / Resin Coating", path: "/services" },
                { label: "Garage Painting", path: "/services" },
                { label: "Concrete Repair & Prep", path: "/services" },
                { label: "Trash Removal", path: "/services" },
                { label: "Powder Coatings", path: "/services" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    onClick={() => scrollTo("products")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company navigation">
            <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about", id: "about" },
                { label: "Service Area", path: "/service-area", id: "service-area" },
                { label: "Gallery", path: "/gallery", id: "gallery" },
                { label: "Contact", path: "/contact", id: "contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+18018886371" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  801-888-6371
                </a>
              </li>
              <li>
                <a href="mailto:epoxynavasarteaga@gmail.com" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span className="break-all">epoxynavasarteaga@gmail.com</span>
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              onClick={() => scrollTo("contact")}
              className="mt-5 w-full block text-center text-sm font-bold tracking-widest uppercase text-primary border border-primary/30 py-2 rounded-sm hover:bg-primary/10 transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Epoxy Flooring and Renovations LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Licensed &amp; Insured · Serving Utah County, Salt Lake &amp; Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
