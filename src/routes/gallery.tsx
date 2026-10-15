import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/PageHeading";
import { pageHead } from "@/lib/page-head";
import { Landmarks } from "@/components/site/Landmarks";
import { RealPeople } from "@/components/site/RealPeople";
import { Proof } from "@/components/site/Proof";
export const Route = createFileRoute("/gallery")({
  head: () => pageHead("Gallery", "Explore our estate landmarks, site visits, office team, and client moments.", "/gallery"),
  component: Page,
});
function Page() { return <><PageHeading title="Gallery" subtitle="Explore our estate landmarks, site visits, office team, and client moments." /><Landmarks /><RealPeople story="field" /><RealPeople story="support" /><Proof /></>; }
