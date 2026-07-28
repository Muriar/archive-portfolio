import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.08)"
      },
       animation: {
        "grid-move": "gridMove 20s linear infinite",
      },
      keyframes: {
        gridMove: {
          "0%": { "background-position": "0px 0px" },
          "100%": { "background-position": "48px 48px" },
        },
      },
    }
  },
  plugins: []
};

export default config;
