import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./BrandLogo";
import { openSalesWhatsApps, waLink } from "@/data/dala";

export const siteNav = [
  { label: "Home", to: "/" }, { label: "About Us", to: "/about" },
  { label: "Estates", to: "/products" }, { label: "Gallery", to: "/gallery" },
  { label: "Payment", to: "/payment" }, { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: state => state.location.pathname });
  const linkClass = (to: string) => `block rounded-sm px-2 py-2 text-sm font-bold transition-colors hover:text-gold ${pathname === to ? "text-gold underline underline-offset-8" : "text-navy-foreground/80"}`;
  return <header className="sticky top-0 z-50 border-b border-navy-foreground/10 navy-panel">
    <div className="container-x flex min-h-16 items-center justify-between gap-2 py-2">
      <BrandLogo />
      <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">{siteNav.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} aria-current={pathname === item.to ? "page" : undefined} className={linkClass(item.to)}>{item.label}</Link>)}</nav>
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <Button asChild className="bg-gold px-3 text-xs font-bold text-gold-foreground hover:bg-gold/90 sm:px-4"><a href={waLink("Hello Dala Real Estate, I want to buy a plot.")} onClick={event => { event.preventDefault(); openSalesWhatsApps("Hello Dala Real Estate, I want to buy a plot."); }} target="_blank" rel="noopener noreferrer"><span className="sm:hidden">WhatsApp</span><span className="hidden sm:inline">Chat on WhatsApp</span></a></Button>
        <Button variant="ghost" size="icon" className="text-navy-foreground xl:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-x grid grid-cols-2 gap-1 border-t border-navy-foreground/10 py-3 xl:hidden">{siteNav.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} aria-current={pathname === item.to ? "page" : undefined} className={linkClass(item.to)}>{item.label}</Link>)}</nav>}
  </header>;
}