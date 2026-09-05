import { Facebook, Instagram } from "lucide-react";
import {
  COMPANY_PHONES,
  FACEBOOK,
  INSTAGRAM,
  MANAGER_PHONE,
  PHONES,
  RC,
  TIKTOK,
  WHATSAPP,
  openSalesWhatsApps,
  waLink,
} from "@/data/dala";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="navy-panel border-t border-white/10 py-12 sm:py-16">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold font-display text-gold-foreground">
              D
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm tracking-widest">DALA</span>
              <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                Real Estate
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/75">
            Genuine, verified estates across Awka, Asaba and Lagos. Flexible payment plans, instant
            allocation and documentation you can trust.
          </p>
          <p className="mt-4 text-xs font-bold text-navy-foreground/60">{RC}</p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Call us</p>
          <ul className="mt-4 space-y-2 text-sm">
            {PHONES.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="text-navy-foreground/85 hover:text-gold">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">WhatsApp</p>
          <p className="mt-4 text-sm text-navy-foreground/85">
            Fastest response. Chat or call{" "}
            <a
              href={waLink("Hello Dala Real Estate, I want to buy a plot.")}
              onClick={(event) => {
                event.preventDefault();
                openSalesWhatsApps("Hello Dala Real Estate, I want to buy a plot.");
              }}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-gold hover:underline"
            >
              +{MANAGER_PHONE}
            </a>
          </p>
          <p className="mt-3 text-xs text-navy-foreground/65">
            Company main lines: {COMPANY_PHONES.join(" · ")}
          </p>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-xs text-navy-foreground/60">
          © {year} Dala Real Estate Nig Ltd. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-bold text-navy-foreground/70">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold"
          >
            <Instagram className="h-4 w-4" />
            <span>@dala_realestate</span>
          </a>
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold"
          >
            <Facebook className="h-4 w-4" />
            <span>@dalarealestate</span>
          </a>
          <a
            href={TIKTOK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <span>@dala.home.estate</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
