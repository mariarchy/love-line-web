import type { Config } from "tailwindcss";

/**
 * Tailwind v4: theme (colors, radius, animations) lives in CSS via @theme in globals.css.
 * This file keeps content sources, dark mode, and plugins (e.g. tailwindcss-animate).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-animate")],
};

export default config;
