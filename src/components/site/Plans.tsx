import { openSalesWhatsApps, waLink } from "@/data/dala";

const steps = [
  { n: "01", t: "Pick your estate", d: "Choose Awka, Asaba or Lagos and the phase that fits your budget." },
  { n: "02", t: "Inspect the land", d: "Book a free site inspection — physically or by video walkthrough." },
  { n: "03", t: "Pay & spread", d: "Deposit to start, then spread the balance over up to 4 months." },
  { n: "04", t: "Get allocated", d: "Receive your documents and physical allocation of your plot." },
];

export function Plans() {
  return (
    <section id="plans" className="py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <span className="eyebrow">Payment plan</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            ₦1M today puts your name on an Awka plot.
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            The Awka Phase 1 allocation promo runs a simple 4-month instalment plan — no hidden
            charges, no interest games.
          </p>

          <div className="mt-8 surface-card overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="navy-panel text-navy-foreground">
                <tr>
                  <th className="px-4 py-3 font-bold">Duration</th>
                  <th className="px-4 py-3 font-bold">Initial deposit</th>
                  <th className="px-4 py-3 font-bold">Monthly payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4 font-display text-xl text-primary">4 months</td>
                  <td className="px-4 py-4 font-display text-xl text-primary">₦1M</td>
                  <td className="px-4 py-4 font-display text-xl text-primary">₦1M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="font-display text-xl text-gold">{s.n}</span>
                <div>
                  <h3 className="text-base">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={waLink("I want to start the 4-month payment plan for Awka Phase 1.")}
            onClick={(event) => {
              event.preventDefault();
              openSalesWhatsApps("I want to start the 4-month payment plan for Awka Phase 1.");
            }}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold btn-gold-hover mt-10"
          >
            Start my payment plan
          </a>
        </div>

        <img
          src="/images/dala-5.webp"
          alt="Dala Home Estate Awka Phase 1 allocation month promo flyer"
          loading="lazy"
          className="mx-auto w-full max-w-sm rounded-2xl shadow-elev"
        />
      </div>
    </section>
  );
}
