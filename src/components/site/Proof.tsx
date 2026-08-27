const testimonials = [
  {
    quote:
      "I paid in instalments from Lagos and got my allocation in Awka without travelling once. Everything was documented.",
    name: "Chidi O.",
    role: "Diaspora investor",
  },
  {
    quote:
      "The inspection convinced me. Real roads, real beacons, real people on ground — not just flyers.",
    name: "Mrs. Ngozi A.",
    role: "Asaba Phase 2 owner",
  },
  {
    quote:
      "Bought two plots at the promo price. The value in that Awka corridor has already moved up.",
    name: "Emeka U.",
    role: "Repeat buyer",
  },
];

export function Proof() {
  return (
    <section id="proof" className="bg-surface py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Proof on ground</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Allocations, inspections and happy owners.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <img
            src="/images/dala-31.webp"
            alt="Dala Real Estate team at an allocation event"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/dala-33.webp"
            alt="Dala Real Estate management addressing clients at an event"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/dala-9.webp"
            alt="Dala Estate price list across Lagos, Awka and Asaba"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-contain bg-card p-2"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-6">
              <blockquote className="text-sm text-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
