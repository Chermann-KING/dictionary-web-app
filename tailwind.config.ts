import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#050505",
          2: "#1F1F1F",
          3: "#2D2D2D",
          4: "#3A3A3A",
        },
        light: {
          1: "#757575",
          2: "#E9E9E9",
          3: "#F4F4F4",
          4: "#FFFFFF",
        },
        accent: {
          purple: "#A445ED",
          red: "#FF5252",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
      fontSize: {
        "heading-l": ["64px", "77px"],
        "heading-m": ["24px", "29px"],
        "heading-s": ["20px", "24px"],
        "body-m": ["18px", "24px"],
        "body-s": ["14px", "17px"],
      },
      boxShadow: {
        "light-mode": "0px 8px 16px 0px hsla(0, 0%, 0%, 0.2)",
        "dark-mode": "0px 8px 16px 0px hsla(274, 82%, 60%, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
