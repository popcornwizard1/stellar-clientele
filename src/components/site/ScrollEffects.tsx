import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const SELECTOR = "main section h2, main section p, main .surface-card, main section img, main figure, main article, main dl > div";

export function ScrollEffects() {
  const pathname = useRouterState({ select: s => s.location.pathname });

  // Desktop wheel smoothing; touch devices keep native scrolling.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0; let lenis: { raf: (t: number) => void; destroy: () => void; stop: () => void; start: () => void } | null = null;
    let mo: MutationObserver | null = null;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
      const loop = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      // Pause while a dialog (image lightbox) is open.
      mo = new MutationObserver(() => {
        if (document.querySelector('[role="dialog"]')) lenis?.stop(); else lenis?.start();
      });
      mo.observe(document.body, { childList: true, subtree: true });
    });
    return () => { cancelAnimationFrame(raf); mo?.disconnect(); lenis?.destroy(); };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("js-reveal");
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
      .filter(el => !el.closest("#top") && !el.closest('[role="dialog"]')&& !el.closest("[data-state], details") && !el.dataset["reveal"]);
    const vh = window.innerHeight;
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("reveal-in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    for (const el of els) {
      if (el.getBoundingClientRect().top < vh) { el.dataset["reveal"] = ""; el.classList.add("reveal-in"); continue; }
      const idx = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.transitionDelay = `${Math.min(idx, 5) * 80}ms`;
      el.dataset["reveal"] = "";
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
