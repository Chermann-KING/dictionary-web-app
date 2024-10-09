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
        "heading-l": ["4rem", "77px"], // 4rem = 64px
        "heading-m": ["1.5rem", "29px"], // 1.5rem = 24px
        "heading-s": ["1.25rem", "24px"], // 1.25 = 20px
        "body-m": ["1.125rem", "24px"], // 1.125rem = 18px
        "body-s": ["0.875rem", "17px"], // 0.875rem = 14px
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
