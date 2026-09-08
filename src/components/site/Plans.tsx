import { openSalesWhatsApps, waLink } from "@/data/dala";

const paymentOptions = [
  {
    title: "Outright purchase",
    price: "₦3M+",
    detail: "Pay the full plot price and move straight to physical allocation once all applicable charges are complete.",
    featured: true,
  },
  {
    title: "3-month instalment",
    price: "₦3.5M",
    detail: "Initial deposit: ₦1M. Confirm the payment schedule with the sales team before proceeding.",
  },
  {
    title: "6-month instalment",
    price: "₦4M+",
    detail: "Initial deposit: ₦1.5M. A longer spread for buyers who want more room in their budget.",
  },
];

const steps = [
  {
    n: "01",
    t: "Choose your plot",
    d: "Confirm your 464 sqm residential plot in Dala Home Estate Phase 3.",
  },
  {
    n: "02",
    t: "Inspect the land",
    d: "Book a free site inspection — physically or by video walkthrough.",
  },
  {
    n: "03",
    t: "Pay your option",
    d: "Choose outright, three-month or six-month instalment payment.",
  },
  {
    n: "04",
    t: "Get allocated",
    d: "Physical allocation is instant after full payment and applicable charges.",
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <span className="eyebrow">Payment structure</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Choose the payment path that fits your plan.</h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Dala Home Estate Phase 3 offers outright purchase or structured instalments. The prices
            below come from the supplied Phase 3 information pack.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {paymentOptions.map((option) => (
              <article key={option.title} className={`surface-card p-5 ${option.featured ? "ring-2 ring-gold" : ""}`}>
                <p className="text-sm font-bold text-muted-foreground">{option.title}</p>
                <p className="mt-3 font-display text-3xl text-primary">{option.price}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{option.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl border border-border bg-secondary p-5 text-sm sm:grid-cols-2">
            <p><strong>Development:</strong> ₦1,000,000 per plot before allocation</p>
            <p><strong>Registered survey:</strong> ₦300,000 per plot</p>
            <p><strong>Deed of assignment:</strong> ₦100,000 per plot</p>
            <p><strong>Commercial / corner:</strong> +20% surcharge each</p>
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
            href={waLink("I want the Dala Home Estate Phase 3 payment options and current availability.")}
            onClick={(event) => {
              event.preventDefault();
                openSalesWhatsApps("I want the Dala Home Estate Phase 3 payment options and current availability.");
            }}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold btn-gold-hover mt-10"
          >
            Request a consultation
          </a>
        </div>

        <img
          src="/images/dala-5.webp"
          alt="Dala Home Estate Phase 3 information and allocation material"
          loading="lazy"
          className="mx-auto w-full max-w-sm rounded-2xl shadow-elev"
        />
      </div>
    </section>
  );
}
