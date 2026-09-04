import { Facebook, Instagram } from "lucide-react";
import { FACEBOOK, INSTAGRAM, PHONES, RC, TIKTOK, WHATSAPP, waLink } from "@/data/dala";

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
            Genuine, verified estates across Awka, Asaba and Lagos. Flexible payment plans,
            instant allocation and documentation you can trust.
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
              target="_blank"
              rel="noreferrer"
              className="font-bold text-gold hover:underline"
            >
              +{WHATSAPP}
            </a>
          </p>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-xs text-navy-foreground/60">
          © {year} Dala Real Estate Nig Ltd. All rights reserved.
        </p>
        <div className="flex gap-5 text-xs font-bold text-navy-foreground/70">
          <span>@dala_realestate</span>
          <span>@dalarealestate</span>
          <span>@dala.home.estate</span>
        </div>
      </div>
    </footer>
  );
}
