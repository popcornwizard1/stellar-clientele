import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const SELECTOR = "main section :is(h2,h3,p,img,article,figure,blockquote,form,dl,ul,details)";

/** Adds subtle fade/rise-in to existing page elements as they scroll into view. */
export function ScrollReveal() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("reveal-in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(el => {
        if (el.dataset["reveal"] !== undefined || el.closest("#top, [role=dialog]") || el.parentElement?.closest("[data-reveal]")) return;
        if (getComputedStyle(el).position === "absolute") return;
        el.dataset["reveal"] = "";
        el.classList.add("reveal-init");
        io.observe(el);
      });
    });
    return () => { cancelAnimationFrame(frame); io.disconnect(); document.querySelectorAll(".reveal-init:not(.reveal-in)").forEach(el => el.classList.add("reveal-in")); };
  }, [pathname]);
  return null;
}
