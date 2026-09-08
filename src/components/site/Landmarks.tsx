const landmarks = [
  { src: "/images/phase3/landmark-000.jpg", title: "The New Asaba", body: "A growing urban corridor with new movement, homes and commercial activity." },
  { src: "/images/phase3/landmark-001.jpg", title: "Residential vision", body: "Modern residential communities show the kind of neighbourhoods the region can support." },
  { src: "/images/phase3/landmark-002.jpg", title: "Port infrastructure", body: "Regional logistics and waterfront development add strategic value to the wider Delta economy." },
  { src: "/images/phase3/landmark-003.jpg", title: "Leisure and lifestyle", body: "A location can be both a smart investment and a place your family enjoys." },
  { src: "/images/phase3/landmark-007.jpg", title: "Connected travel", body: "Air and road links help keep the Asaba growth story connected to wider markets." },
  { src: "/images/phase3/landmark-011.jpg", title: "A city in motion", body: "The surrounding development vision points to long-term infrastructure and demand." },
];

export function Landmarks() {
  return (
    <section id="landmarks" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Why this location</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Invest where the next chapter is being built.</h2>
            <p className="mt-4 text-muted-foreground">
              These landmark references from the Phase 3 information pack show the wider development
              vision around Asaba and why location matters for a future home or investment.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
            Ogwashi-Uku · Asaba · Delta
          </span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landmarks.map((landmark) => (
            <figure key={landmark.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img
                src={landmark.src}
                alt={landmark.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="p-5">
                <h3 className="text-lg">{landmark.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{landmark.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}