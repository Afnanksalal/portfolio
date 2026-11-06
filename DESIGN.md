# Lyra’s garden

Personal homepage redesign on `redesign/lyras-garden`. The original React/Vite setup and project/contact links are retained.

## Run

`npm ci` then `npm run dev`. Production: `npm run build`.

## Art and interaction

The two original drawings in `public/art/` were provided by Afnan and drawn by his friend Lyra. Preserve the originals and the visible credit. On desktop they are aligned with identical centered cover transforms. On phones all four flowers are recomposed around the introduction using matching source rectangles in both drawings. A Canvas 2D mask reveals the colored drawing in a soft cursor trail, then fades back to the pencil drawing over 2.2 seconds. Animation stops when no trail remains. Pixel density is capped at 2. No WebGL dependency is needed for this image-to-image effect.

Bloom is triggered directly by hovering, or touching/dragging on phones, with no button. Touch handlers preserve normal scrolling. Reduced motion shows static colored artwork without the trail animation. The line drawing stays visible if the canvas or colored image cannot load.

## Design

Paper `#d2d1c0`, ink `#373344`, plum `#66536e`, muted text `#625d65`, rules `#b8b6a8`, light paper `#e5e3d6`. Lora for headings, DM Sans for reading, Kalam for short notes; system fallbacks remain available. Lyra’s drawing is the defining visual. Keep text restrained and avoid resume, hiring, skill-cloud, stock photo, and dashboard treatments.

The homepage is for visitors to get to know Afnan, browse a few projects, or say hello. Keep these links straightforward on small screens and maintain visible keyboard focus. Project descriptions come from the previous portfolio; the introduction is editable personal copy.

The welcome screen uses Lyra's original signed flower drawing in full (contain, never cropped). It waits for the three art assets with a 1.6-second minimum and a 5-second maximum, then fades out over 450ms. Reduced motion skips the fade. Underlying content is inert and scrolling locked only while the screen is visible.
