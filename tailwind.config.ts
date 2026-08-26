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
  sans: ["var(--font-sans)", "Playfair Display", "serif"],
  latin: ["var(--font-latin)", "Caveat", "cursive"]
},
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
