# Add scroll reveal and smooth scrolling (animation only)

Nothing about the design, layout, spacing, colours, text or images changes. Elements only fade in and rise slightly as they come into view.

## What visitors will see
- **Scroll reveal:** section headings, paragraphs, cards, photos, price cards and FAQ items gently fade in and move up about 16px as they scroll into view. Cards in a row appear one after another with a short delay (about 80ms each), so it feels premium, not busy. Each item animates once only.
- **Smooth scrolling:** page jumps (like "back to top" or in-page links) glide smoothly. Normal scrolling feels fluid on desktop. Phones and tablets keep their own native touch scrolling, which is already smooth and avoids lag.
- Works the same on every page (Home, About, Estates, Gallery, Payment, FAQs, Contact), and replays correctly when switching pages.
- Visitors who have "reduce motion" turned on in their device settings see no animation.

## What stays untouched
- Header, floating WhatsApp/call/social buttons, pop-up image viewer and forms are never hidden or delayed.
- Content is fully visible if scripts fail or for search engines (nothing starts invisible in the page source).

## Technical details
- One small client component `ScrollEffects` mounted once in `__root.tsx`. It uses a single `IntersectionObserver` (no new animation library) to add a `.reveal-in` class to existing elements inside `<main>`: `section h2, section p, .surface-card, section img, figure, article, dl > div`, re-scanning on route change via `useRouterState` pathname.
- CSS in `styles.css`: `html.js-reveal [data-reveal]{opacity:0;transform:translateY(16px)}` and `.reveal-in{opacity:1;transform:none;transition:opacity .7s, transform .7s cubic-bezier(.22,1,.36,1)}`, only `opacity`/`transform` (GPU-cheap, no layout shift). Stagger via inline `transition-delay` per sibling index (capped). Elements already in view on load are shown immediately; the hero keeps its existing `rise` animation.
- `html { scroll-behavior: smooth; }` plus `scroll-padding-top` for the sticky header; disabled under `prefers-reduced-motion`. Desktop wheel smoothing via the lightweight `lenis` package only on fine-pointer devices, paused while the image lightbox is open; skipped on touch devices.
- Verify with Playwright on each route at 375px and 1280px: no horizontal overflow, all content visible after scrolling, no console errors, lightbox still zooms/pans.
