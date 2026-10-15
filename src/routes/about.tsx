import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/PageHeading";
import { pageHead } from "@/lib/page-head";
import { Why } from "@/components/site/Why";
import { RealPeople } from "@/components/site/RealPeople";
export const Route = createFileRoute("/about")({
  head: () => pageHead("About Us", "Meet the people behind Dala Real Estate and our approach to property ownership.", "/about"),
  component: Page,
});
function Page() { return <><PageHeading title="About Us" subtitle="Meet the people behind Dala Real Estate and our approach to property ownership." /><Why /><RealPeople story="team" /></>; }
