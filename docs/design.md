# Design notes

## Identity

Afnan’s personal homepage, built around lilies drawn by his best friend Lyra. The visitor can get to know Afnan, browse a few current projects, or say hello. Keep the copy concise and personal.

| Token       | Value     |
| ----------- | --------- |
| Paper       | `#d2d1c0` |
| Ink         | `#373344` |
| Plum        | `#66536e` |
| Muted text  | `#625d65` |
| Rule        | `#b8b6a8` |
| Light paper | `#e5e3d6` |

Lora sets headings, DM Sans sets reading text, and Kalam sets short handwritten notes. Styles and responsive rules live in `src/index.css`; Tailwind is retained for its base reset only.

## Artwork

Preserve the original exports in `public/art/`. The individual lilies are Morana, Isolde, Violet, and Inara. SVG view boxes remove the transparent margins at display time without modifying their source files. The separate landscape sheet frames the contact section. The `/art` page contains the gallery and links to Lyra’s sites.

The hero’s line and color sheets share a transform so pencil lines stay aligned. A Canvas 2D mask reveals color on hover or touch, holds it under a stationary pointer, and fades after leaving. On phones and portrait tablets, four bounded source rectangles recompose the lilies around the introduction. Pixel density is capped at 2.

## Motion and glass

The signed welcome sheet waits for the artwork, with a 1.6-second minimum and 5-second maximum. It slides upward over 1.1 seconds with Framer Motion. Content stays inert and scrolling is locked until the transition finishes. At Afnan’s explicit request, this transition and the lily reveal remain enabled when the browser reports reduced motion.

The navbar uses a generated rounded-lens displacement map in Chromium. Other browsers get a frosted blur/saturation fallback. Only the backdrop is distorted; link text stays sharp. Scrollbars are hidden while scrolling remains enabled.

## Layout

Desktop hero height follows the visible viewport. Type, spacing, and credit padding adapt to shorter windows. Narrow and portrait layouts cap lily sizes and allow enough page height for the introduction and artwork. Navigation labels and social links stay intact; longer reading text reflows naturally.

Use the viewport checklist in [verification.md](verification.md) when changing layout. Keep the current palette, original art, visible credits, keyboard focus, and direct-route navigation working.
