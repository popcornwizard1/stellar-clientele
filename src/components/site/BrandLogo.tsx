import { Link } from "@tanstack/react-router";
import logo from "@/assets/dala-logo.jpg.asset.json";

export function BrandLogo() {
  return <Link to="/" aria-label="Dala Real Estate homepage" className="flex shrink-0 items-center gap-2 sm:gap-3">
    <img src={logo.url} alt="Dala Real Estate logo" width={86} height={72} className="h-11 w-14 rounded-sm bg-card object-contain sm:h-12 sm:w-16" />
    <span className="leading-tight"><span className="block font-display text-sm tracking-widest">DALA</span><span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gold">Real Estate</span></span>
  </Link>;
}