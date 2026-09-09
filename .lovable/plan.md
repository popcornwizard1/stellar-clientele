# Route client requests/orders to company WhatsApp lines only

## Goal
Redirect every sales/client WhatsApp CTA so enquiries and plot reservations go to the two company WhatsApp lines, not the manager's personal WhatsApp. Manager phone remains available for direct calls only.

## Changes

### 1. Update WhatsApp routing constants (`src/data/dala.ts`)
- Change `SALES_WHATSAPPS` from `[MANAGER_WHATSAPP, ...COMPANY_WHATSAPPS]` to `[...COMPANY_WHATSAPPS]` (company lines only).
- Change `WHATSAPP` fallback from `MANAGER_WHATSAPP` to `COMPANY_WHATSAPPS[0]` so right-click/open-in-new-tab links also land on a company line.
- Keep `MANAGER_PHONE`, `MANAGER_WHATSAPP`, `COMPANY_PHONES`, `COMPANY_WHATSAPPS`, `FEEDBACK_WHATSAPP`, and `PHONE_ENTRIES` unchanged.

### 2. Update sales-line copy in `src/components/site/Contact.tsx`
- Change the helper text below the submit button from "Opens three WhatsApp chats..." to "Opens two WhatsApp chats...".

### 3. Update WhatsApp display in `src/components/site/Footer.tsx`
- Replace the "+{MANAGER_PHONE} (Manager)" WhatsApp link with the first company line (`+{COMPANY_WHATSAPPS[0]}`).
- Keep the "Company lines" line or merge it so the footer no longer promotes the manager's WhatsApp for sales.

### 4. Update floating action labels in `src/components/site/FloatingActions.tsx`
- Change tooltip/aria-label from "Chat all sales lines" / "Chat sales lines" to "Chat company sales lines" so the label matches the new routing.
- Leave the call-manager button untouched (voice calls still route to the manager).

### 5. Verify no other manager-WhatsApp references remain
- Search for usages of `MANAGER_WHATSAPP` and `MANAGER_PHONE` in WhatsApp contexts.
- Confirm `Header`, `Hero`, `PromoBanner`, `Estates`, and `Plans` use `openSalesWhatsApps`/`waLink` and therefore pick up the new routing automatically.

## Outcome
- Sales enquiries, plot reservations, price-list requests, and consultation CTAs open WhatsApp chats to the two company lines simultaneously.
- The manager's WhatsApp is no longer used for sales routing.
- The manager's phone number is still callable via `tel:` links and the floating call button.
- Feedback/complaints continue to go to the first company line only.
