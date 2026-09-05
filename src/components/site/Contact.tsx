import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { z } from "zod";
import { FACEBOOK, INSTAGRAM, OFFICE, PHONES, TIKTOK, estates, openSalesWhatsApps } from "@/data/dala";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be 100 characters or less."),
  estate: z.string().trim().min(1, "Please select an estate."),
  budget: z.string().trim().max(120, "Budget details must be 120 characters or less."),
  message: z.string().trim().max(1000, "Message must be 1,000 characters or less."),
});

export function Contact() {
  const [name, setName] = useState("");
  const [estate, setEstate] = useState(estates[0]?.id ?? "");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const chosen = estates.find((e) => e.id === estate);
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
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@dala_realestate</span>
                </a>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold hover:text-gold"
                >
                  <Facebook className="h-4 w-4" />
                  <span>@dalarealestate</span>
                </a>
                <a
                  href={TIKTOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold hover:text-gold"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span>@dala.home.estate</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const result = contactSchema.safeParse({ name, estate, budget, message });
            if (!result.success) {
              setError(result.error.issues[0]?.message ?? "Please check your details.");
              return;
            }

            setError("");
            const text = `Hello Dala Real Estate.\nName: ${result.data.name}\nInterested in: ${chosen ? `${chosen.name} ${chosen.phase} (${chosen.price})` : "-"}\nBudget: ${result.data.budget || "-"}\n${result.data.message || "-"}`;
            openSalesWhatsApps(text);
          }}
          className="surface-card space-y-4 p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="text-xs font-extrabold uppercase tracking-wider text-navy"
            >
              Your name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/55 outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. David Dura"
            />
          </div>

          <div>
            <label
              htmlFor="estate"
              className="text-xs font-extrabold uppercase tracking-wider text-navy"
            >
              Estate of interest
            </label>
            <select
              id="estate"
              value={estate}
              onChange={(e) => setEstate(e.target.value)}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-ring"
            >
              {estates.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} — {e.phase} ({e.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="text-xs font-extrabold uppercase tracking-wider text-navy"
            >
              Budget / payment style
            </label>
            <input
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              maxLength={120}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/55 outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. ₦1M deposit, 4-month plan"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-xs font-extrabold uppercase tracking-wider text-navy"
            >
              Anything else?
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              maxLength={1000}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/55 outline-none focus:ring-2 focus:ring-ring"
              placeholder="I'd like an inspection this weekend."
            />
          </div>

          {error && <p className="text-sm font-bold text-destructive">{error}</p>}
          <button type="submit" className="btn-base btn-gold btn-gold-hover w-full">
            Send on WhatsApp
          </button>
          <p className="text-center text-xs text-navy/70">
            Opens three WhatsApp chats with your details prefilled. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
