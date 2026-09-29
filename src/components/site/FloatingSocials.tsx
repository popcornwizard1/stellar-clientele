import { Facebook, Instagram } from "lucide-react";
import { FACEBOOK, INSTAGRAM, TIKTOK } from "@/data/dala";

const socialLinks = [
  {
    label: "Open Dala Real Estate on Instagram",
    title: "Instagram: @dala_realestate",
    href: INSTAGRAM,
    icon: <Instagram className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Open Dala Real Estate on Facebook",
    title: "Facebook: Dala Homes",
    href: FACEBOOK,
    icon: <Facebook className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Open Dala Home Estate on TikTok",
    title: "TikTok: @dala.home.estate",
    href: TIKTOK,
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
] as const;

export function FloatingSocials() {
  return (
    <nav
      aria-label="Dala Real Estate social media"
      className="fixed bottom-4 left-4 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full border border-gold/40 bg-navy/95 p-1.5 text-navy-foreground shadow-elev backdrop-blur sm:bottom-5"
    >
      {socialLinks.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.title}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-gold hover:text-gold-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          {social.icon}
        </a>
      ))}
    </nav>
  );
}