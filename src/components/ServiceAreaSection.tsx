import { MapPin, CheckCircle } from "lucide-react";

const cities = [
  { name: "Provo", label: "Utah County Seat" },
  { name: "Orem", label: "Utah County" },
  { name: "Lehi", label: "Utah County" },
  { name: "American Fork", label: "Utah County" },
  { name: "Spanish Fork", label: "Utah County" },
  { name: "Springville", label: "Utah County" },
  { name: "Payson", label: "Utah County" },
  { name: "Mapleton", label: "Utah County" },
  { name: "Salt Lake City", label: "Salt Lake County" },
  { name: "West Jordan", label: "Salt Lake County" },
  { name: "Sandy", label: "Salt Lake County" },
  { name: "Draper", label: "Salt Lake County" },
];

const pillars = [
  { value: "Free", label: "On-Site Estimates" },
  { value: "Local", label: "Utah-Based Crew" },
  { value: "Honest", label: "Transparent Pricing" },
  { value: "Reliable", label: "Job Done Right" },
];

const ServiceAreaSection = () => {
  return (
    <section
      id="service-area"
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Epoxy Flooring Service Areas in Utah"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">
            Epoxy Flooring Specialists — Utah County
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            EPOXY FLOORS ACROSS{" "}
            <span className="text-primary neon-glow">UTAH COUNTY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Whether you're in Provo, Orem, Lehi, or Salt Lake — we bring professional epoxy and resin floor coatings to your garage or shop with a free on-site estimate and no pressure.
          </p>
        </div>

        {/* Value pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {pillars.map((s) => (
            <div
              key={s.label}
              className="text-center p-5 rounded-sm border border-border card-gradient"
            >
              <div className="text-2xl font-black text-primary neon-glow mb-1">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Map + cities side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* City list */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-black text-foreground tracking-tight uppercase">
                Cities We Serve
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-start gap-2.5 p-3 rounded-sm border border-border card-gradient group hover:border-primary/40 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {city.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{city.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 pl-1">
              * Don't see your city? Call us — we travel throughout Utah for the right project.
            </p>
          </div>

          {/* Why Utah trusts us */}
          <div className="p-8 rounded-sm border border-primary/20 card-gradient neon-border">
            <h3 className="text-xl font-black text-foreground tracking-tight mb-2 uppercase">
              Why Utah Homeowners Choose Us
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Utah's climate is tough on garage floors — freezing winters, road salt, and wide temperature swings destroy cheap coatings. Our systems are chosen specifically for Utah's conditions.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Utah Winter Rated",
                  desc: "UV-stable, freeze-thaw resistant systems proven in Utah County's climate.",
                },
                {
                  title: "Road Salt Resistant",
                  desc: "Our topcoats stand up to the salt and grit Utah roads dish out every winter.",
                },
                {
                  title: "One Crew, Everything Done",
                  desc: "Floors, paint, concrete, removal — we handle it all so you make one call.",
                },
                {
                  title: "Your Utah Neighbors",
                  desc: "We're a local business. Our reputation is built on the quality of every single job.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
