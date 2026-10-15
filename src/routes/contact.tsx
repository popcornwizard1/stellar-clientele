import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/PageHeading";
import { pageHead } from "@/lib/page-head";
import { Contact } from "@/components/site/Contact";
import { Feedback } from "@/components/site/Feedback";
export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Us", "Contact Dala Real Estate, request an inspection, or send feedback to the company team.", "/contact"),
  component: Page,
});
function Page() { return <><PageHeading title="Contact Us" subtitle="Contact Dala Real Estate, request an inspection, or send feedback to the company team." /><Contact /><Feedback /></>; }
