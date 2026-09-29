type StoryKey = "team" | "field" | "support";

const stories = {
  team: {
    eyebrow: "Meet the people behind Dala",
    title: "A property team you can see, meet and speak with.",
    body: "From your first question to inspection and allocation, our people are available to guide you clearly through every step.",
    photos: [
      {
        src: "/images/team/dala-office-team.jpg",
        alt: "Dala Real Estate team together at the company office",
        caption: "The Dala office team",
        contain: false,
      },
      {
        src: "/images/team/property-team.jpg",
        alt: "Dala Real Estate property team during a client visit",
        caption: "Ready to guide your property journey",
        contain: false,
      },
      {
        src: "/images/team/community-highlights.jpg",
        alt: "Dala representatives and visitors at the company office",
        caption: "Real conversations with real clients",
        contain: false,
      },
    ],
  },
  field: {
    eyebrow: "Proof beyond promises",
    title: "Site work and allocation happen on the ground.",
    body: "Our team verifies plots, supports inspections and helps buyers understand exactly what they are purchasing.",
    photos: [
      {
        src: "/images/team/site-verification.jpg",
        alt: "Dala representatives checking survey beacons on a property site",
        caption: "On-site plot and beacon verification",
        contain: false,
      },
      {
        src: "/images/team/allocation-announcement.jpg",
        alt: "Dala Home Estate allocation announcement with site and transport details",
        caption: "Organised allocation and inspection support",
        contain: true,
      },
    ],
  },
  support: {
    eyebrow: "Clear guidance at every step",
    title: "Questions about payment? Speak with people who listen.",
    body: "The Dala team explains payment expectations, documentation and next steps before you make a commitment.",
    photos: [
      {
        src: "/images/team/payment-reminder.jpg",
        alt: "Dala Real Estate development fee and official account reminder",
        caption: "Transparent payment reminders",
        contain: true,
      },
      {
        src: "/images/team/office-consultation.jpg",
        alt: "A Dala Real Estate representative working at the office",
        caption: "Direct support from the office team",
        contain: false,
      },
    ],
  },
} satisfies Record<
  StoryKey,
  {
    eyebrow: string;
    title: string;
    body: string;
    photos: ReadonlyArray<{ src: string; alt: string; caption: string; contain?: boolean }>;
  }
>;

export function RealPeople({ story }: { story: StoryKey }) {
  const content = stories[story];

  return (
    <section className="overflow-hidden border-y border-border bg-background py-16 sm:py-20">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="max-w-xl">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">{content.title}</h2>
            <p className="mt-4 text-muted-foreground">{content.body}</p>
            <blockquote className="mt-7 border-l-4 border-gold pl-5 font-display text-xl leading-tight text-primary sm:text-2xl">
              “You are working with real people who understand your needs and interests.”
            </blockquote>
          </div>

          <div className={`grid gap-3 ${content.photos.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {content.photos.map((photo) => (
              <figure key={photo.src} className="group relative overflow-hidden rounded-xl bg-secondary shadow-card">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`aspect-[4/5] h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                    photo.contain ? "object-contain" : "object-cover"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy/90 px-4 py-3 text-xs font-bold text-navy-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}