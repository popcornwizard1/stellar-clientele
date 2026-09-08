import {
  Fence,
  FileCheck2,
  MapPin,
  Route,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Strategic location",
    body: "Ogwashi-Uku, Delta State, Nigeria — positioned for access to the wider Asaba growth corridor.",
  },
  {
    icon: Ruler,
    title: "464 sqm plots",
    body: "A generous residential plot size for building a home, compound or long-term family investment.",
  },
  {
    icon: FileCheck2,
    title: "Freehold & survey",
    body: "The PDF states freehold and registered survey documentation with no government acquisition.",
  },
  {
    icon: Fence,
    title: "Planned infrastructure",
    body: "Perimeter fencing, a gated estate house and earth roads are part of the development vision.",
  },
  {
    icon: Route,
    title: "Motorable access",
    body: "The access road is described as tarred and motorable for easier visits and future occupancy.",
  },
  {
    icon: ShieldCheck,
    title: "Professionally managed",
    body: "A structured estate process supports allocation, documentation and ongoing plot maintenance.",
  },
];

export function Phase3Highlights() {
  return (
    <section id="phase3" className="bg-surface py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">The opportunity</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">A secure foundation for your next home.</h2>
          <p className="mt-4 text-muted-foreground">
            Dala Home Estate Phase 3 combines a documented land purchase with the essentials buyers
            want to see before committing: location, access, plot size and a clear development plan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <article key={title} className="surface-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}