import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => scrollTo("hero")} className="flex items-center gap-3 cursor-pointer">
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

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", path: "/services", id: "products" },
            { label: "Gallery", path: "/gallery", id: "gallery" },

            { label: "Service Area", path: "/service-area", id: "service-area" },
            { label: "About", path: "/about", id: "about" },
            { label: "Contact", path: "/contact", id: "contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+13852404837"
            className="flex items-center gap-2 text-sm font-medium text-primary border border-primary/40 px-4 py-2 rounded-sm hover:bg-primary/10 transition-all duration-200 neon-border-hover"
          >
            <Phone className="w-4 h-4" />
            385-240-4837
          </a>
          <Link
            to="/contact"
            onClick={() => scrollTo("contact")}
            className="text-sm font-bold tracking-widest uppercase bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:bg-primary/90 transition-all duration-200"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Services", path: "/services", id: "products" },
            { label: "Gallery", path: "/gallery", id: "gallery" },

            { label: "Service Area", path: "/service-area", id: "service-area" },
            { label: "About", path: "/about", id: "about" },
            { label: "Contact", path: "/contact", id: "contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+13852404837" className="flex items-center gap-2 text-primary text-sm font-medium">
            <Phone className="w-4 h-4" /> 385-240-4837
          </a>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
