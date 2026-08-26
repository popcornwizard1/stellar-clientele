# Make images work on Vercel

## What's wrong

Seven of the eight photos on the page are not stored in the project. They are CDN pointer files (`src/assets/dala-*.webp.asset.json`) whose image URLs start with `/__l5e/assets-v1/...`. That path is served by Lovable's own hosting layer, so the pictures load in the preview and on a Lovable deploy, but on Vercel nothing answers that path and every one of those images 404s.

The hero image (`src/assets/hero-estate.jpg`) is a real file imported through the bundler, so that one already works anywhere.

## The fix

1. Download the seven CDN images back into the repo as real files under `public/images/` with lowercase, hyphenated names that match exactly:
   - `dala-5.webp`, `dala-9.webp`, `dala-11.webp`, `dala-16.webp`, `dala-20.webp`, `dala-31.webp`, `dala-33.webp`
2. Update the four components that use them to reference plain absolute paths instead of importing the pointer JSON:
   - `src/components/site/Plans.tsx`
   - `src/components/site/Proof.tsx`
   - `src/components/site/Why.tsx`
3. Delete the now-unused `*.asset.json` pointer files (the unreferenced ones, `dala-10/18/19`, go too).
4. Move `hero-estate.jpg` handling: keep the bundler import (it is production-safe on Vercel and gets hashed/optimised), unless you'd rather have every image in `/public` for consistency — see the question below.
5. Verify: run a production build and check the built output contains each image file, then confirm the rendered page requests only in-repo paths (no `/__l5e/` requests remain anywhere).

## Technical notes

- `/public/images/foo.webp` is referenced in code as `src="/images/foo.webp"` — served verbatim by Vercel, no bundler involvement.
- Filenames stay all-lowercase to avoid the classic case-sensitivity break between macOS/local and Vercel's Linux builds.
- No layout, styling, copy, or alt-text changes; only the image sources.
