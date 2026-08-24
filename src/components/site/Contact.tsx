import { useState } from "react";
import { OFFICE, PHONES, estates, waLink } from "@/data/dala";

export function Contact() {
  const [name, setName] = useState("");
  const [estate, setEstate] = useState(estates[0].id);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const chosen = estates.find((e) => e.id === estate);
  const text = `Hello Dala Real Estate.
Name: ${name || "-"}
Interested in: ${chosen ? `${chosen.name} ${chosen.phase} (${chosen.price})` : "-"}
Budget: ${budget || "-"}
${message}`;

  return (
    <section id="contact" className="navy-panel py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className="text-navy-foreground">
          <span className="eyebrow">Talk to us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Book a free inspection or request the full price list.
          </h2>
          <p className="mt-4 max-w-md text-navy-foreground/75">
            Send your details and a Dala consultant will reach you on WhatsApp with plot
            availability, documents and the nearest inspection date.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Call</p>
              <p className="mt-1 space-x-3">
                {PHONES.map((p) => (
                  <a key={p} href={`tel:${p}`} className="font-bold hover:text-gold">
                    {p}
                  </a>
                ))}
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Office</p>
              <p className="mt-1 max-w-xs text-navy-foreground/80">{OFFICE}</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Social</p>
              <p className="mt-1 text-navy-foreground/80">
                @dala_realestate · @dalarealestate · @dala.home.estate
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(text), "_blank", "noopener");
          }}
          className="surface-card space-y-4 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-xs font-extrabold uppercase tracking-wider">
              Your name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. Praise Ikejiofor"
            />
          </div>

          <div>
            <label htmlFor="estate" className="text-xs font-extrabold uppercase tracking-wider">
              Estate of interest
            </label>
            <select
              id="estate"
              value={estate}
              onChange={(e) => setEstate(e.target.value)}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              {estates.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} — {e.phase} ({e.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="text-xs font-extrabold uppercase tracking-wider">
              Budget / payment style
            </label>
            <input
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. ₦1M deposit, 4-month plan"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-xs font-extrabold uppercase tracking-wider">
              Anything else?
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="I'd like an inspection this weekend."
            />
          </div>

          <button type="submit" className="btn-base btn-gold btn-gold-hover w-full">
            Send on WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Opens WhatsApp with your details prefilled. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
