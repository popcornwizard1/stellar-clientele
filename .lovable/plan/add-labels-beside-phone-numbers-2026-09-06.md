# Add labels beside phone numbers

## Goal
Make every displayed phone number on the site clearly identify who it reaches — Manager, Company line, or Company line 2 (Customer care) — without changing page layout or functionality.

## Where the numbers appear now
- **Header** (`src/components/site/Header.tsx`): shows only `MANAGER_PHONE` as a plain number.
- **Footer** (`src/components/site/Footer.tsx`): lists all `PHONES` under "Call us", and shows the manager WhatsApp plus company lines under "WhatsApp".
- **FloatingActions** (`src/components/site/FloatingActions.tsx`): call/WhatsApp icons with no visible labels.
- **Contact** (`src/components/site/Contact.tsx`): lists `PHONES` under "Call".
- **Feedback** (`src/components/site/Feedback.tsx`): shows a single company feedback line.

## Proposed changes

### 1. Data layer (`src/data/dala.ts`)
Replace the flat `PHONES` array with a labeled array so every component can render the same labels consistently:

```ts
export const PHONE_ENTRIES = [
  { label: "Manager", number: MANAGER_PHONE },
  { label: "Company line", number: "09161711613" },
  { label: "Company line 2 (Customer care)", number: "07070259903" },
] as const;
```

Keep the legacy `PHONES` export for any existing callers, or update all callers to `PHONE_ENTRIES`.

### 2. Header
Add the "Manager" label next to the manager phone number, e.g.:
```
Manager: 07014664302
```
Keep it hidden on the smallest breakpoint and preserve the WhatsApp button.

### 3. Footer "Call us"
Render each phone entry as a two-column row or inline label so it reads:
- Manager — 07014664302
- Company line — 09161711613
- Company line 2 (Customer care) — 07070259903

Keep the existing link styling and click-to-call behavior.

### 4. Footer "WhatsApp"
Update the copy to show:
- "Manager (WhatsApp): +2347014664302"
- "Company lines: +2349161711613, +2347070259903"

The manager link still opens all three sales WhatsApp chats on click.

### 5. FloatingActions
Add visible tooltip-style labels that appear on hover/focus for the call and WhatsApp buttons, or at least update `aria-label` to include "Manager" / "Sales lines".

### 6. Contact section
Update the "Call" block to show labeled phone entries instead of plain numbers.

### 7. Feedback section
Label the displayed feedback line as "Company line (Customer care)" or similar.

## Verification
- Run `bun run build` to confirm no TypeScript errors.
- Check the live preview to confirm labels are readable and links still work.
- Confirm no layout breaks on mobile.
