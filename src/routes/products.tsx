import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/PageHeading";
import { pageHead } from "@/lib/page-head";
import { Estates } from "@/components/site/Estates";
import { Phase3Highlights } from "@/components/site/Phase3Highlights";
import { Phase3Details } from "@/components/site/Phase3Details";
export const Route = createFileRoute("/products")({
  head: () => pageHead("Estates & Services", "Explore available estates, Phase 3 property highlights, and our existing real estate services.", "/products"),
  component: Page,
});
function Page() { return <><PageHeading title="Estates & Services" subtitle="Explore available estates, Phase 3 property highlights, and our existing real estate services." /><Estates /><Phase3Highlights /><Phase3Details part="services" /></>; }
