import { useMemo, useState } from "react";
import { CircleHelp, FileCheck2, Landmark, MapPin, Search, Wallet } from "lucide-react";

type FaqCategory = "Property details" | "Payment options" | "Costs & fees" | "Allocation & documentation";

type FaqItem = {
  category: FaqCategory;
  q: string;
  a: string;
};

const categories: { label: FaqCategory; icon: typeof MapPin }[] = [
  { label: "Property details", icon: MapPin },
  { label: "Payment options", icon: Wallet },
  { label: "Costs & fees", icon: Landmark },
  { label: "Allocation & documentation", icon: FileCheck2 },
];

const faqs: FaqItem[] = [
  {
    category: "Property details",
    q: "Where is Dala Home Estate Phase 3 located?",
    a: "Dala Home Estate Phase 3 is located in Ogwashi-Uku, Delta State, Nigeria, within the wider Asaba growth corridor.",
  },
  {
    category: "Property details",
    q: "Who is developing the estate?",
    a: "Dala Real Estate Nigeria Limited is the developer of Dala Home Estate Phase 3.",
  },
  {
    category: "Property details",
    q: "What title does the land have?",
    a: "The project information states freehold and registered survey documentation, with no government acquisition.",
  },
  {
    category: "Property details",
    q: "What infrastructure will be provided?",
    a: "The development plan includes perimeter fencing, a gated estate house and earth roads. The access road is described as tarred and motorable.",
  },
  {
    category: "Property details",
    q: "What is the plot size?",
    a: "Each residential plot is 464 square metres.",
  },
  {
    category: "Payment options",
    q: "What is the outright purchase price?",
    a: "The outright purchase option is above ₦3 million per plot, before the listed statutory and development charges.",
  },
  {
    category: "Payment options",
    q: "Can I pay in three months?",
    a: "Yes. The three-month instalment option is ₦3.5 million, with an initial deposit of ₦1 million.",
  },
  {
    category: "Payment options",
    q: "Can I pay in six months?",
    a: "Yes. The six-month instalment option is above ₦4 million, with an initial deposit of ₦1.5 million.",
  },
  {
    category: "Costs & fees",
    q: "Is there a development fee?",
    a: "Yes. The development fee is ₦1,000,000 per plot and is payable before physical allocation. It covers infrastructure placement within the estate.",
  },
  {
    category: "Costs & fees",
    q: "What are the survey and deed fees?",
    a: "The registered survey fee is ₦300,000 per plot, and the deed of assignment/agreement fee is ₦100,000 per plot. Both are required at the time of payment.",
  },
  {
    category: "Costs & fees",
    q: "Are there extra charges for commercial or corner plots?",
    a: "Yes. Commercial plots attract a 20% surcharge, while corner-piece plots attract an additional 20% charge.",
  },
  {
    category: "Allocation & documentation",
    q: "When will my plot be allocated?",
    a: "Physical allocation is done instantly after the plot price and other statutory charges have been paid in full.",
  },
  {
    category: "Allocation & documentation",
    q: "What documents do I receive after payment?",
    a: "You receive a purchase receipt, acknowledgement letter and contract of sale agreement after completing payment. The deed of assignment and registered survey are issued three weeks after physical allocation.",
  },
  {
    category: "Allocation & documentation",
    q: "When should I start work on my plot?",
    a: "The project information gives a 7–9 month timeline to commence work, with at least perimeter fencing expected on the plot. Underdeveloped plots should also be maintained regularly.",
  },
  {
    category: "Allocation & documentation",
    q: "Can I resell my plot or property?",
    a: "Yes, but Dala Real Estate must be duly informed so the necessary documentation process can be completed.",
  },
  {
    category: "Allocation & documentation",
    q: "Can I request a refund if I change my mind?",
    a: "The supplied FAQ says a refund may be considered after another buyer is found and is subject to a 30% administrative fee. Ask the team for the current written terms before paying.",
  },
];

export function Faq() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">("All");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesQuery =
        !normalizedQuery || `${faq.q} ${faq.a} ${faq.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">The answers buyers need</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Clear answers before you commit.</h2>
            <p className="mt-4 text-muted-foreground">
              Search the Phase 3 information pack by location, payment, fees, allocation or documents.
            </p>

            <div className="mt-8 surface-card border-gold/40 bg-card p-5">
              <CircleHelp className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg">Most asked first</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Physical allocation is instant after full payment. Deed of assignment and registered
                survey follow three weeks after allocation.
              </p>
            </div>
          </div>

          <div>
            <label className="relative block" htmlFor="faq-search">
              <span className="sr-only">Search frequently asked questions</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="faq-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search questions, fees or documents"
                className="w-full rounded-xl border border-input bg-card py-4 pl-12 pr-4 text-foreground outline-none ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </label>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  activeCategory === "All"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                All questions
              </button>
              {categories.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={`inline-flex whitespace-nowrap items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    activeCategory === label
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-5 divide-y divide-border border-y border-border">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold marker:hidden">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-2xl font-normal leading-none text-primary transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{faq.a}</p>
                  </details>
                ))
              ) : (
                <p className="py-10 text-sm text-muted-foreground">
                  No questions match that search. Contact the team for a direct answer.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}