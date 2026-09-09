# Route client requests and orders to company lines only

## Goal
Change sales/client-order routing so inquiries go to the two company WhatsApp lines, not the manager’s personal WhatsApp. Keep the manager number displayed separately as a direct contact.

## Current state
- `src/data/dala.ts` defines `SALES_WHATSAPPS = [MANAGER_WHATSAPP, ...COMPANY_WHATSAPPS]`.
- All sales CTAs (`Hero`, `Header`, `PromoBanner`, `Estates`, `Plans`, `Contact`, `Footer`, `FloatingActions`) call `openSalesWhatsApps(...)`, which opens all numbers in that list.
- Feedback/submissions already go to `FEEDBACK_WHATSAPP` (company line 1).

## Changes
1. Update `src/data/dala.ts`
   - Change `SALES_WHATSAPPS` to only `COMPANY_WHATSAPPS` (exclude `MANAGER_WHATSAPP`).
   - Keep `MANAGER_WHATSAPP` and `MANAGER_PHONE` available for direct-call/direct-WhatsApp display.
   - Keep `FEEDBACK_WHATSAPP` as company line 1.

2. Update sales CTAs
   - Confirm every sales/order CTA still uses `openSalesWhatsApps(...)`; no code changes needed in components if the source array is updated.
   - Keep the Header/FloatingActions "Call Manager" link pointing to `tel:${MANAGER_PHONE}`.

3. Verify
   - Run production build (`bun run build`).
   - Use Playwright to check that a sales CTA opens only the two company WhatsApp URLs and that the manager number is still reachable via the Call Manager button.

## Out of scope
- No layout or styling changes.
- No changes to the feedback form routing.
