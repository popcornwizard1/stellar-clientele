import { openSalesWhatsApps, waLink } from "@/data/dala";

export function PromoBanner() {
  return (
    <section className="bg-destructive text-destructive-foreground">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-bold">
          ALLOCATION MONTH PROMO — Awka Phase 1 slashed from ₦5M to{" "}
          <span className="font-display">₦4M</span>. Limited plots.
        </p>
        <a
          href={waLink("I want to claim the Awka Phase 1 promo at ₦4M.")}
          onClick={(event) => {
            event.preventDefault();
            openSalesWhatsApps("I want to claim the Awka Phase 1 promo at ₦4M.");
          }}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-extrabold underline underline-offset-4"
        >
          Claim a plot →
        </a>
      </div>
    </section>
  );
}
