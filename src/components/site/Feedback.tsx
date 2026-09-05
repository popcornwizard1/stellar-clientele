import { useState } from "react";
import { z } from "zod";
import { FEEDBACK_WHATSAPP, waLinkForNumber } from "@/data/dala";

const feedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be 100 characters or less."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number must be 20 characters or less.")
    .regex(/^[0-9+()\s-]+$/, "Please enter a valid phone number."),
  type: z.enum(["Complaint", "Feedback", "Suggestion"]),
  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(1000, "Message must be 1,000 characters or less."),
});

export function Feedback() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"Complaint" | "Feedback" | "Suggestion">("Feedback");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  return (
    <section id="feedback" className="py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <span className="eyebrow">We listen</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Customer complaints and feedback</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us what happened or share an idea. Your message goes directly to the Dala company
            team on WhatsApp for a prompt response.
          </p>
          <a
            href={`tel:${COMPANY_PHONES_DISPLAY}`}
            className="mt-6 inline-flex text-sm font-extrabold text-primary hover:underline"
          >
            Company feedback line: {COMPANY_PHONES_DISPLAY}
          </a>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            const result = feedbackSchema.safeParse({ name, phone, type, message });

            if (!result.success) {
              setError(result.error.issues[0]?.message ?? "Please check your details.");
              return;
            }

            setError("");
            const text = `Hello Dala Real Estate.\nType: ${result.data.type}\nName: ${result.data.name}\nPhone: ${result.data.phone}\nMessage: ${result.data.message}`;
            window.open(waLinkForNumber(FEEDBACK_WHATSAPP, text), "_blank", "noopener,noreferrer");
          }}
          className="surface-card space-y-4 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="feedback-name" className="text-xs font-extrabold uppercase tracking-wider text-navy">
              Your name
            </label>
            <input
              id="feedback-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={100}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/55 outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. David Dura"
            />
          </div>

          <div>
            <label htmlFor="feedback-phone" className="text-xs font-extrabold uppercase tracking-wider text-navy">
              Phone number
            </label>
            <input
              id="feedback-phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              inputMode="tel"
              maxLength={20}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/55 outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. 0701 466 4302"
            />
          </div>

          <div>
            <label htmlFor="feedback-type" className="text-xs font-extrabold uppercase tracking-wider text-navy">
              Message type
            </label>
            <select
              id="feedback-type"
              value={type}
              onChange={(event) => setType(event.target.value as typeof type)}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-ring"
            >
              <option>Complaint</option>
              <option>Feedback</option>
              <option>Suggestion</option>
            </select>
          </div>

          <div>
            <label htmlFor="feedback-message" className="text-xs font-extrabold uppercase tracking-wider text-navy">
              Your message
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength={1000}
              rows={5}
              className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/55 outline-none focus:ring-2 focus:ring-ring"
              placeholder="Tell us how we can help."
            />
          </div>

          {error && <p className="text-sm font-bold text-destructive">{error}</p>}
          <button type="submit" className="btn-base btn-gold btn-gold-hover w-full">
            Send to the company team
          </button>
          <p className="text-center text-xs text-navy/70">Opens WhatsApp on the company feedback line.</p>
        </form>
      </div>
    </section>
  );
}

const COMPANY_PHONES_DISPLAY = "09161711613";