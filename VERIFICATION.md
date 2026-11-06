# Verification

- Production build and TypeScript checks pass.
- Changed TS/TSX files pass ESLint with explicit no-unused-expressions options; the repository’s existing lint-tool versions throw during rule loading without these options.
- Edge: desktop and mobile screenshots visually inspected, including /art, the postcard, glass navigation, and stationary hover color.
- Hover remains visible after 2.6 seconds with the pointer stationary; leaving clears it. Verified even with reduced-motion emulation enabled.
- Framer Motion loader has a negative Y position during its exit and then unmounts, including under reduced-motion emulation. Underlying scrolling and links recover.
- Touch reveal works after navigating back from /art; route transitions restore the page’s top position.
- 320px, 390px, and 700px checks detect no horizontal overflow. Wheel scrolling works with scrollbars hidden. Navigation anchors and art-credit links work.
- Original transparent art assets are preserved. Project descriptions and links checked against GitHub profile/repository content.
- The glass SVG refraction path was tested in Edge. Safari/Firefox fallback was implemented but not visually tested here.
