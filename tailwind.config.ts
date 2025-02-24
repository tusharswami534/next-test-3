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
        cyan: "#71CED0",
        dark: "#434244",
      },
      boxShadow: {
        commonShadow: "0px 4px 24.6px 0px #71CED061",
      },
    },
  },
  plugins: [],
} satisfies Config;
