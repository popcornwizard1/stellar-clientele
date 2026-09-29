# Fix mobile layout and add floating social links

## Goal
Make the existing Dala Real Estate page fit phone screens from 320px through 430px without changing its visual identity, content, functionality, or desktop presentation.

## Changes
- Fix the FAQ grid’s intrinsic-width expansion—the confirmed root cause of the current 914px-wide mobile page—by allowing both grid columns and their contents to shrink within the viewport.
- Make the FAQ category controls wrap into the available width on phones instead of widening the page, while preserving the current horizontal presentation on larger screens.
- Add targeted `min-width: 0`, width, wrapping, and media containment rules to the existing header, forms, cards, grids, headings, buttons, and images where the mobile audit identifies pressure points.
- Keep `overflow-x` clipping only as a final page-level safeguard after correcting the elements that create overflow.
- Add a compact fixed social group at the bottom-left with recognizable Instagram, Facebook, and TikTok icons, accessible labels/tooltips, safe new-tab links, and the existing navy/gold/white styling.
- Update shared social URLs to the exact profiles supplied so the footer, contact area, and new floating group all point to the same correct accounts.
- Keep the existing footer social links and right-side call/WhatsApp controls unchanged.

## Verification
- Test the rendered page at 320, 360, 375, 390, 412, and 430px.
- At every width, compare viewport width against page scroll width and identify any element crossing either edge.
- Visually inspect the header, hero, cards, images, FAQ search/categories/answers, forms, footer, and both floating control groups.
- Verify all three social links, accessible names, safe new-tab behavior, normal vertical scrolling, and no browser/runtime errors.

## Technical details
- Preserve the current responsive breakpoints and desktop classes wherever possible; fixes will be mobile-first and narrowly scoped.
- Reuse Lucide for Instagram/Facebook and the project’s existing TikTok brand glyph, avoiding a new dependency.
