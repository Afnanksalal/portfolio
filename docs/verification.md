# Verification

## Automated checks

```sh
npm ci
npm run lint
npm run build
```

The build includes strict TypeScript checks for the app and Vite configuration. GitHub Actions runs the same checks for pull requests and `main`. ESLint warnings fail CI.

## Browser checks

Check both `/` and `/art`, including direct loads and refreshes. Verify:

- The welcome illustration slides upward, then restores scrolling and keyboard access.
- Lily color follows the pointer, stays visible while hovering, and fades after leaving. Touch reveal should not prevent scrolling.
- Navigation and footer links work, focus is visible, and the hidden scrollbar does not disable scrolling.
- The hero outline stays complete and Lyra’s credit stays visible on desktop.
- Reading text reflows; headings, navigation labels, social links, and lily names are not clipped.
- Morana, Isolde, Violet, and Inara appear in that order on `/art`.

Representative viewport sizes:

| Layout           | Sizes                               |
| ---------------- | ----------------------------------- |
| Narrow phone     | 320 × 568, 360 × 640                |
| Portrait phone   | 390 × 844, 430 × 932                |
| Landscape phone  | 568 × 320, 844 × 390                |
| Portrait tablet  | 768 × 1024, 820 × 1180              |
| Landscape tablet | 1024 × 768                          |
| Desktop          | 1366 × 650, 1440 × 768, 1920 × 1080 |

The initial responsive audit also covered 375 × 667, 412 × 915, 667 × 375, 932 × 430, 700 × 900, 1920 × 900, and 1536 × 730. Desktop, mobile, landscape, and gallery screenshots were reviewed in Edge. Chromium SVG glass refraction was verified; Safari and Firefox visual fallbacks still need checks on those browsers.

Browser screenshots and scratch scripts are local verification artifacts and are not committed.

## Repository cleanup checks

The cleaned production build was compared with the live site at 390 × 844 and 1440 × 900; screenshot dimensions match and no pixels differed by more than 8 RGB levels. Gallery names, direct routes, and not-found recovery were checked again.

After dependency refresh, npm audit --omit=dev reports zero vulnerabilities. The full audit reports moderate minimatch advisories through the development-only TypeScript ESLint packages, with no fix available from npm at the time of cleanup. Recheck these as upstream packages are released.
