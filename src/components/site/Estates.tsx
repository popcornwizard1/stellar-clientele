import { estates, openSalesWhatsApps, waLink } from "@/data/dala";

export function Estates() {
  return (
    <section id="estates" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Available now</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Which Dala Estate will you call home?</h2>
          <p className="mt-4 text-muted-foreground">
            Every plot below is dry, surveyed and ready for allocation. Prices are per plot and
            can be spread across an instalment plan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {estates.map((e) => (
            <article
              key={e.id}
              className={`surface-card flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1 ${
                e.featured ? "ring-2 ring-gold" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                    {e.city}
                  </p>
                  <h3 className="mt-2 text-lg">{e.name}</h3>
                  <p className="text-sm font-bold text-primary">{e.phase}</p>
                </div>
                {e.badge && (
                  <span className="rounded-full bg-gold px-3 py-1 text-[0.6rem] font-extrabold uppercase tracking-wider text-gold-foreground">
                    {e.badge}
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-3">
                <span className="font-display text-3xl text-primary">{e.price}</span>
                {e.oldPrice && (
                  <span className="pb-1 text-sm font-bold text-destructive line-through">
                    {e.oldPrice}
                  </span>
                )}
                <span className="pb-1 text-xs font-bold text-muted-foreground">/ {e.size}</span>
              </div>

              <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.note}</p>

              <a
                href={waLink(`I'm interested in ${e.name} ${e.phase} at ${e.price}.`)}
                onClick={(event) => {
                  event.preventDefault();
                  openSalesWhatsApps(`I'm interested in ${e.name} ${e.phase} at ${e.price}.`);
                }}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-navy mt-6 w-full py-3 text-sm hover:opacity-90"
              >
                Reserve this plot
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
