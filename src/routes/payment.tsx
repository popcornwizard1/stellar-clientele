import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/PageHeading";
import { pageHead } from "@/lib/page-head";
import { Plans } from "@/components/site/Plans";
import { Phase3Details } from "@/components/site/Phase3Details";
export const Route = createFileRoute("/payment")({
  head: () => pageHead("Payment & Ownership", "Compare existing payment plans, fees, official bank details, and the ownership timeline.", "/payment"),
  component: Page,
});
function Page() { return <><PageHeading title="Payment & Ownership" subtitle="Compare existing payment plans, fees, official bank details, and the ownership timeline." /><Plans /><Phase3Details part="payment" /></>; }
