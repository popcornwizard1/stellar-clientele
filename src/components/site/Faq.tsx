const faqs = [
  {
    q: "What documents do I get after payment?",
    a: "You receive a receipt, a contract of sale, a deed of assignment and your survey/allocation documents once payment is completed.",
  },
  {
    q: "Can I inspect the land before paying?",
    a: "Yes. Free inspections are arranged for every estate, and we run video walkthroughs for buyers abroad.",
  },
  {
    q: "How big is a plot?",
    a: "464 SQM in Awka and Asaba, 500 SQM in Lagos.",
  },
  {
    q: "Can I buy from outside Nigeria?",
    a: "Absolutely. Many of our owners are diaspora buyers who pay in instalments and get allocated remotely.",
  },
  {
    q: "Is there an agency or development fee?",
    a: "The advertised price is the plot price. Any statutory or development charge is disclosed upfront before you pay.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.6fr_1fr]">
        <div>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Before you buy</h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {f.q}
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
