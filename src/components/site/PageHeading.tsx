export function PageHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return <section className="navy-panel py-12 sm:py-16"><div className="container-x"><span className="eyebrow">Dala Real Estate</span><h1 className="mt-4 text-3xl sm:text-4xl">{title}</h1><p className="mt-4 max-w-2xl text-navy-foreground/75">{subtitle}</p></div></section>;
}