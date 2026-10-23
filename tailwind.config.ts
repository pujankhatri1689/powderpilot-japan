import type { Config } from "tailwindcss";

/**
 * PowderPilot design tokens.
 *
 * Tailwind v4 is CSS-first, so this file is loaded explicitly via
 * `@config "../../tailwind.config.ts";` in `src/app/globals.css`.
 *
 * Usage examples:
 *   bg-charcoal      -> page backgrounds (slate-900)
 *   text-snow        -> primary text (slate-50)
 *   text-ice         -> accent text (sky-400)
 *   bg-ice-deep      -> accent backgrounds / buttons (sky-500)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark charcoal backgrounds
        charcoal: {
          DEFAULT: "#0f172a", // slate-900
          light: "#1e293b", // slate-800 (cards, borders)
          dark: "#020617", // slate-950 (deep shadows)
        },
        // Snow-white text
        snow: {
          DEFAULT: "#f8fafc", // slate-50
          muted: "#94a3b8", // slate-400 (secondary text)
        },
        // Icy-blue accents
        ice: {
          DEFAULT: "#38bdf8", // sky-400 (accent text)
          deep: "#0ea5e9", // sky-500 (accent backgrounds)
          dark: "#0284c7", // sky-600 (hover states)
        },
      },
    },
  },
};

export default config;
