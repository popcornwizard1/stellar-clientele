import heroImg from "@/assets/hero-estate.jpg";
import { waLink } from "@/data/dala";

const stats = [
  { value: "7", label: "Estates across 3 states" },
  { value: "464–500", label: "SQM per plot" },
  { value: "4 mths", label: "Spread payment" },
  { value: "100%", label: "Genuine title" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Surveyed land plots at a Dala Home Estate site at sunset"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 hero-overlay" />

      <div className="container-x py-20 text-navy-foreground sm:py-28 lg:py-36">
        <div className="max-w-2xl rise">
          <span className="eyebrow">Awka · Asaba · Lagos</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Own land you can <span className="text-gold">actually build on</span> — safely and
            stresslessly.
          </h1>
          <p className="mt-6 max-w-xl text-base text-navy-foreground/85 sm:text-lg">
            Dala Real Estate develops genuine, verified estates with clean documentation and
            flexible payment plans. Plots from{" "}
            <strong className="text-gold">₦3 million</strong>, allocation the moment you complete
            payment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("I saw your website. Please send me the Dala estate price list.")}
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
