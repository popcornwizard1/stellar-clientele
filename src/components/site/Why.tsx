import img20 from "@/assets/dala-20.webp.asset.json";
import img16 from "@/assets/dala-16.webp.asset.json";
import img11 from "@/assets/dala-11.webp.asset.json";

const reasons = [
  {
    title: "Genuine properties",
    body: "Every estate is verified and documented before a single plot is offered. No omonile drama, no double allocation.",
  },
  {
    title: "Flexible payment plans",
    body: "Start with a deposit and spread the balance over up to 4 months. Awka Phase 1: ₦1M down, ₦1M monthly.",
  },
  {
    title: "Estate development, not just land",
    body: "We are developers. Roads, layout, beacons and gated estate planning are part of what you buy into.",
  },
  {
    title: "Real allocation, real people",
    body: "Physical inspections, on-site allocation events and a team you can meet at our Asaba office.",
  },
];

export function Why() {
  return (
    <section id="why" className="navy-panel py-20 sm:py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Why Dala</span>
          <h2 className="mt-3 text-3xl text-navy-foreground sm:text-4xl">
            We make owning a property safe and stressless.
          </h2>
          <p className="mt-4 max-w-lg text-navy-foreground/75">
            Dala Real Estate Nig Ltd (RC 1545121) has helped hundreds of families and diaspora
            investors take their first real step into property ownership across Anambra, Delta and
            Lagos.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-gold pl-4">
                <h3 className="text-base text-navy-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={img16.url}
            alt="Dala Real Estate agent at the Asaba Phase 3 estate signboard"
            loading="lazy"
            className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-elev"
          />
          <img
            src={img11.url}
            alt="Graded land at a Dala estate development site"
            loading="lazy"
            className="h-44 w-full rounded-2xl object-cover"
          />
          <img
            src={img20.url}
            alt="The Dala Real Estate team at the Asaba office"
            loading="lazy"
            className="h-44 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
