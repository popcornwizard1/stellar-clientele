# Full-screen property image viewer

## Goal
Add one consistent, premium image viewer across the existing property, estate, landmark, proof, payment, and team imagery without changing the page design or image files.

## Implementation
- Add a reusable site-wide lightbox provider and clickable image wrapper.
- Use the existing accessible dialog system for focus trapping, Escape-to-close, labels, and scroll locking.
- Add `react-zoom-pan-pinch` for reliable pinch, wheel, double-tap/double-click zoom, and drag-to-pan behavior without distorting image proportions.
- Style the full-viewport overlay in Dala navy, gold, and white, with a large top-right close control, image count/caption, and unobtrusive zoom/reset controls.
- Keep images centered with their natural aspect ratio and load the same full-resolution public image in the viewer.
- Group related images so landmarks, team stories, proof photos, and the Why Dala photo set support previous/next navigation, keyboard arrows, and mobile swipe when at the base zoom.
- Disable gallery switching while zoomed so dragging pans the image; preserve swipe navigation only at the base zoom.
- Convert all meaningful inline content images to the shared viewer while leaving the full-bleed decorative hero background unchanged.
- Preserve current lazy loading, captions, alt text, layout, branding, and all existing links/actions.

## Mobile and accessibility safeguards
- Lock background scrolling only while open and restore the exact page position after close.
- Fit the viewer to dynamic mobile viewport height, safe areas, and widths from 320px upward without horizontal overflow.
- Give every image trigger, navigation action, zoom action, and close action an accessible name and keyboard focus state.
- Respect reduced-motion preferences and avoid loading adjacent images until the viewer needs them.

## Verification
- Test opening, closing, zooming, panning, and gallery navigation on desktop.
- Test tap, swipe, pinch-style pointer interaction, scroll locking, and restoration on mobile.
- Audit 320, 360, 375, 390, 412, and 430px for horizontal overflow with the viewer closed and open.
- Confirm all image sources load, the current page position is retained, and the production build remains healthy.
