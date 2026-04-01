const photos = [
  {
    src: "/image9.jpeg",
    label: "Flake Chip Epoxy",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/image3.jpeg",
    label: "Solid Color Epoxy",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/image2.jpeg",
    label: "Concrete Surface Prep",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/image4.jpeg",
    label: "Garage Painting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/image7.jpeg",
    label: "Powder Coating Finish",
    span: "col-span-1 row-span-1",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-28 px-6 relative" aria-labelledby="gallery-heading">
      <div className="absolute inset-0 hero-gradient opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Our Work</p>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            EPOXY FLOOR <span className="text-primary neon-glow">GALLERY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real projects, real transformations. See what's possible for your space.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm border border-border group cursor-pointer neon-border-hover transition-all duration-300 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {/* <p className="text-sm font-bold text-foreground">{photo.label}</p>
                <p className="text-xs text-primary tracking-widest uppercase">View Project</p> */}
              </div>
              {/* Neon corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
