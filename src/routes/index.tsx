import { createFileRoute, Link } from "@tanstack/react-router";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Hero } from "@/components/site/Hero";
import { Phase3Highlights } from "@/components/site/Phase3Highlights";
import { RealPeople } from "@/components/site/RealPeople";
import { Estates } from "@/components/site/Estates";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/")({
  head: () => pageHead("Dala Home Estate Phase 3", "Explore Dala Home Estate Phase 3 in Ogwashi-Uku, Asaba: 464 sqm plots at ₦5 million, flexible payments, and company inspection enquiries.", "/"),
  component: Index,
});
function Index() {
  return <><PromoBanner /><Hero /><Phase3Highlights /><RealPeople story="team" /><Estates />
    <section className="navy-panel py-16"><div className="container-x"><span className="eyebrow">Your next step</span><h2 className="mt-3 text-3xl">Find the answers. Meet the team.</h2><div className="mt-8 flex flex-wrap gap-3">
      <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90"><Link to="/faq">Browse FAQs</Link></Button>
      <Button asChild variant="outline"><Link to="/payment">Payment plans</Link></Button>
      <Button asChild variant="outline"><Link to="/contact">Book an inspection</Link></Button>
    </div></div></section>
  </>;
}