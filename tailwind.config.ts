import type { Config } from "tailwindcss";

// Retain Tailwind's CSS reset; visual styles live in src/index.css.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {},
  plugins: [],
} satisfies Config;
