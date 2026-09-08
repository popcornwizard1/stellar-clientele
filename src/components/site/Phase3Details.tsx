import { Banknote, BriefcaseBusiness, Building2, CheckCircle2, Clock3, FileText, Hammer, UsersRound } from "lucide-react";

const services = [
  [Building2, "Property development", "Planned residential communities with practical infrastructure and long-term value."],
  [BriefcaseBusiness, "Property marketing", "Clear information and direct guidance for buyers, families and investors."],
  [Hammer, "Real estate construction", "A development partner for turning secure land into useful spaces."],
  [UsersRound, "Consultation", "Building material and real estate consultation from a team focused on delivery."],
] as const;

const timeline = [
  ["01", "Choose your plot", "Confirm your 464 sqm residential plot and preferred payment option."],
  ["02", "Complete payment", "Pay the plot price and the applicable statutory and development charges."],
  ["03", "Physical allocation", "Your plot is physically allocated instantly after full payment."],
  ["04", "Receive documents", "Deed of assignment and registered survey are issued three weeks after allocation."],
] as const;

export function Phase3Details() {
  return (
    <>
      <section id="services" className="py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What Dala does</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">More than a plot. A clearer path to ownership.</h2>
            <p className="mt-4 text-muted-foreground">
              Dala Real Estate Nig Ltd is focused on redefining the Nigerian real estate market through
              affordable, secured and professionally delivered property opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([Icon, title, body]) => (
              <article key={title} className="surface-card p-6">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="navy-panel py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Your ownership timeline</span>
            <h2 className="mt-3 text-3xl text-navy-foreground sm:text-4xl">From enquiry to allocation.</h2>
            <p className="mt-4 text-navy-foreground/75">
              A simple process keeps the next step visible, from choosing a plot to receiving your
              documents.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {timeline.map(([number, title, body], index) => (
              <li key={number} className="relative border-l border-gold/60 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-6">
                {index < timeline.length - 1 && (
                  <span className="absolute left-0 top-3 hidden h-px w-full bg-gold/30 md:block" aria-hidden="true" />
                )}
                <span className="relative inline-grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-sm text-gold-foreground">
                  {number}
                </span>
                <h3 className="mt-4 text-base text-navy-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-foreground/70">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-5 text-sm text-navy-foreground/75">
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-gold" /> 7–9 months to commence work</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> At least perimeter fencing expected</span>
          </div>
        </div>
      </section>

      <section id="payment-methods" className="bg-surface py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="eyebrow">Pay securely</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Use the official account details.</h2>
            <p className="mt-4 text-muted-foreground">
              The Phase 3 information pack advises buyers to pay directly into the company account and
              not to hand cash to an agent.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="surface-card p-6">
              <Banknote className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Access Bank</p>
              <p className="mt-2 font-display text-2xl text-primary">1932334090</p>
              <p className="mt-2 text-sm font-bold">Dala Real Estate Nig Ltd</p>
            </article>
            <article className="surface-card p-6">
              <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Secondary account</p>
              <p className="mt-2 font-display text-2xl text-primary">2045985160</p>
              <p className="mt-2 text-sm font-bold">Dala Real Estate Nig Ltd</p>
            </article>
            <p className="sm:col-span-2 text-sm text-muted-foreground">
              Cheques should be issued in favour of Dala Property Ltd. Confirm account details with the
              Dala team before making any payment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}