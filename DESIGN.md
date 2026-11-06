# Lyra’s garden

Personal homepage on `redesign/lyras-garden`. React, Vite, TypeScript. Run `npm ci` then `npm run dev`; build with `npm run build`.

## Visual direction

Lyra’s original flowers define the site. Paper #d2d1c0, ink #373344, plum #66536e, muted text #625d65. Lora headings, DM Sans body, Kalam notes. Keep the copy personal and concise. No résumé or hiring presentation.

The unsigned landscape drawing frames the contact section as a postcard. Phone layouts recompose its four flowers without stretching them. The navbar floats above the page with a generated rounded-lens displacement map in Chromium; other browsers use a blur/saturation fallback. Only the backdrop is distorted, not the links. Scrollbars are hidden without disabling scrolling.

## Artwork and interaction

Original PNGs are preserved in public/art. The four individual transparent exports are displayed with SVG view boxes, keeping their alpha and avoiding empty full-sheet margins. Each project gets a flower; /art gives Lyra a dedicated credit/gallery page linked from the footer.

The hero uses aligned line/color drawings and a Canvas 2D mask. Hover reveals color and holds it while the pointer remains; leaving fades the trail over 2.2 seconds. Touch reveals color without preventing scrolling. Per Afnan’s explicit preference, hover and the Framer Motion loader stay enabled even when the browser reports reduced motion.

The welcome screen shows Lyra’s signed drawing, waits for the art assets (1.6 seconds minimum, 5 seconds maximum), then slides upward over 1.1 seconds to uncover the homepage. Underlying content is inert and scrolling locked only until the slide finishes.

## Content

Featured repositories are Genmotion, Co-op, BreachScope, and Frag. Names and descriptions were checked against Afnan’s GitHub profile and current repository READMEs. Preserve the original contact destinations and visible credit to Lyra.
