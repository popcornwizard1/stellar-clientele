import heroImg from "@/assets/hero-estate.jpg";
import { openSalesWhatsApps, waLink } from "@/data/dala";

const stats = [
  { value: "₦3M+", label: "Outright purchase" },
  { value: "464", label: "SQM per plot" },
  { value: "3–6", label: "Month payment plans" },
  { value: "3 wks", label: "Deed & survey timeline" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Surveyed land at a Dala Home Estate development site"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 hero-overlay" />

      <div className="container-x py-20 text-navy-foreground sm:py-28 lg:py-36">
        <div className="max-w-2xl rise">
          <span className="eyebrow">Ogwashi-Uku · Asaba · Delta State</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Dala Home Estate Phase 3 — <span className="text-gold">your dream home awaits.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-navy-foreground/85 sm:text-lg">
            Premium residential plots in Ogwashi-Uku, Asaba with modern infrastructure, freehold and
            registered survey documentation, and flexible payment options from{
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("I saw your website. Please send me the Dala estate price list.")}
              onClick={(event) => {
                event.preventDefault();
                openSalesWhatsApps(
                  "I saw your website. Please send me the Dala estate price list.",
                );
              }}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-gold btn-gold-hover"
            >
              Get the price list
            </a>
            <a href="#estates" className="btn-base btn-outline-light">
              View available estates
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl text-gold">{s.value}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-foreground/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
