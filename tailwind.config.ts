import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#BCBBBC",
        lightGray: "#B5B4B5",
        cyan: "#71CED0",
        dark: "#434244",
        blackLight: "#4C4C4C",
        green: "#00C11F",
        red: "#D01314",
        lightBlue: "#D0D0D0",
        darkBlack: "#0E0C0F",
        darkGray: "#0F0D10",
        lightBlack: "#232224",
      },
      boxShadow: {
        commonShadow: "0px 4px 24.6px 0px #71CED061",
        cardShadow: "0px 5px 10px 0px #fff",
      },
      backgroundImage: {
        footer: "url('/assets/images/webp/footer-image.webp')",
        driven: "url('/assets/images/webp/driven-bg.webp')",
        aiDriven:
          "linear-gradient(180deg, rgba(113, 206, 208, 0) 0%, #71CED0 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
