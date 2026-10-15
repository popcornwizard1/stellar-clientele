import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/PageHeading";
import { pageHead } from "@/lib/page-head";
import { Faq } from "@/components/site/Faq";
export const Route = createFileRoute("/faq")({
  head: () => pageHead("Frequently Asked Questions", "Find answers about Dala Home Estate Phase 3, payments, fees, allocation, and documentation.", "/faq"),
  component: Page,
});
function Page() { return <><PageHeading title="Frequently Asked Questions" subtitle="Find answers about Dala Home Estate Phase 3, payments, fees, allocation, and documentation." /><Faq /></>; }
