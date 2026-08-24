import { PHONES, waLink } from "@/data/dala";

const nav = [
  { label: "Estates", href: "#estates" },
  { label: "Why Dala", href: "#why" },
  { label: "Payment Plans", href: "#plans" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 navy-panel/95 backdrop-blur">
      <div className="navy-panel">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold font-display text-gold-foreground">
              D
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm tracking-widest">DALA</span>
              <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                Real Estate
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-bold text-navy-foreground/80 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONES[0]}`}
              className="hidden text-sm font-bold text-navy-foreground/85 hover:text-gold sm:block"
            >
              {PHONES[0]}
            </a>
            <a
              href={waLink("Hello Dala Real Estate, I want to buy a plot.")}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-gold btn-gold-hover px-4 py-2 text-xs"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
