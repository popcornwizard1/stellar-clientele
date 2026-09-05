import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Hero } from "@/components/site/Hero";
import { Estates } from "@/components/site/Estates";
import { Why } from "@/components/site/Why";
import { Plans } from "@/components/site/Plans";
import { Proof } from "@/components/site/Proof";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Feedback } from "@/components/site/Feedback";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dala Real Estate | Buy Land in Awka, Asaba & Lagos" },
      {
        name: "description",
        content:
          "Own genuine, verified land from Dala Real Estate in Awka, Asaba and Lagos. Flexible payment plans from ₦3M. Instant allocation and secure documentation.",
      },
      { property: "og:title", content: "Dala Real Estate | Buy Land in Awka, Asaba & Lagos" },
      {
        property: "og:description",
        content:
          "Genuine properties, flexible payment plans and stressless ownership across Awka, Asaba and Lagos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://stellar-clientele.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stellar-clientele.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <PromoBanner />
        <Hero />
        <Estates />
        <Why />
        <Plans />
        <Proof />
        <Faq />
        <Contact />
        <Feedback />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
