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
- Desktop opening verified at 1920x1080, 1920x900, 1536x730, 1440x768, 1366x650, and 1024x600: hero fits one viewport, Lyra’s credit is visible, navbar and introduction do not overlap, and there is no horizontal overflow.
- Final responsive sweep: both routes checked at 320x568, 360x640, 375x667, 390x844, 412x915, 430x932, 568x320, 667x375, 844x390, 932x430, 700x900, 768x1024, 820x1180, and 1024x768. No page overflow, clipped heading/control text, or intro/credit overlap. Selected phone, landscape, tablet, and gallery screenshots inspected. Paragraphs reflow naturally; navigation, social links, email, and lily names stay intact.
- Gallery names: Morana, Isolde, Violet, Inara. Netlify SPA fallback added for direct /art navigation.
