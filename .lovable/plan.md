# Label the secondary bank account as First Bank

## What changes
On the "Use the official account details" section (payment methods), the second account card currently reads:

- Card 1: Access Bank — 1932334090 — Dala Real Estate Nig Ltd
- Card 2: "Secondary account" — 2045985160 — Dala Real Estate Nig Ltd

Change the second card's label from **"Secondary account"** to **"First Bank"**, so both cards show a bank name, matching the first card's style.

## Details
- One edit in `src/components/site/Phase3Details.tsx` (the payment methods card).
- The account number (2045985160) and account name (Dala Real Estate Nig Ltd) stay the same.
- No other part of the site mentions this account, so nothing else changes.
- Styling, layout, and all other content stay untouched.

## Verification
- Check the build passes.
- Confirm the card shows "First Bank" with the same account details.
