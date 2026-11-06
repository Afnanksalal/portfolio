# Contributing

This is Afnan’s personal site. Small fixes to accessibility, browser compatibility, performance, and responsive behavior are welcome; please open an issue before proposing a broad redesign.

## Development

1. Use Node.js 22 and install the locked dependencies with `npm ci`.
2. Start the app with `npm run dev`.
3. Make a focused change and run `npm run lint` and `npm run build`.
4. For visual changes, check the homepage and `/art` on a narrow phone, a landscape phone, a tablet, and a desktop. Include screenshots in the pull request.

Keep reading text legible and allow it to reflow. Navigation labels, project names, and social links should stay intact. Check keyboard focus, direct route refresh, hover/touch color reveal, and the welcome transition when relevant.

Lyra’s artwork is part of the site’s identity. Preserve the original drawings and their attribution; discuss replacements or reuse with the artist first.

Pull requests should explain the problem, resulting behavior, and checks performed. Keep credentials, generated builds, local screenshots, and editor state out of commits.
