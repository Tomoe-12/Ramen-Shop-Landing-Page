import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#231815",
        broth: "#f5dfb6",
        ember: "#bf4a2b",
        kelp: "#233b33",
        cream: "#f9f1e3",
        gold: "#d99d3f",
      },
      boxShadow: {
        card: "0 18px 40px rgba(35, 24, 21, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
