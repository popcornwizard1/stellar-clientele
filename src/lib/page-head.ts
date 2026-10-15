export function pageHead(title: string, description: string, path: string) {
  const fullTitle = `${title} | Dala Real Estate`;
  const url = `https://stellar-clientele.lovable.app${path}`;
  return { meta: [{ title: fullTitle }, { name: "description", content: description }, { property: "og:title", content: fullTitle }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: url }] };
}