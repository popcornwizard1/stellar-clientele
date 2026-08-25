# Finish the Dala Real Estate landing page

## Current state
- All section components are built and type-safe: `Header`, `Hero`, `PromoBanner`, `Estates`, `Why`, `Plans`, `Proof`, `Faq`, `Contact`.
- The reported TypeScript error in `Contact.tsx` is already fixed.
- `src/routes/index.tsx` still renders the template placeholder, so the live preview shows a blank "Your app will live here" page.
- `Footer` and a floating call/WhatsApp action button do not exist yet.

## What I will do
1. Create `src/components/site/Footer.tsx` with office address, phone numbers, social handles, copyright and a final WhatsApp CTA.
2. Create `src/components/site/FloatingActions.tsx` — sticky bottom-right buttons for phone and WhatsApp that appear after scrolling.
3. Rewrite `src/routes/index.tsx` to assemble every section in order:
   - `Header`
   - `PromoBanner`
   - `Hero`
   - `Estates`
   - `Why`
   - `Plans`
   - `Proof`
   - `Faq`
   - `Contact`
   - `Footer`
   - `FloatingActions`
4. Add route-specific `head()` metadata to `src/routes/index.tsx` (title, description, og tags, twitter card) so it is SEO-ready.
5. Run the typecheck/build to confirm no errors.
6. Open the preview to verify the full page renders and the WhatsApp/contact CTAs work.

## Expected result
The published preview will show a complete, scrollable Dala Real Estate landing page with all extracted content, pricing, photos and lead-capture CTAs.
