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
      },
      boxShadow: {
        commonShadow: "0px 4px 24.6px 0px #71CED061",
      },
      backgroundImage: {
        footer: "url('/assets/images/webp/footer-image.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
