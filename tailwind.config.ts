import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "var(--text)",
      },
      gridTemplateRows: {
        item: "290px",
      },
      backgroundSize: {
        "60%": "60%",
        "50%": "50%",
      },
      backgroundPosition: {
        "center-asymmetrical": "72% 60%",
      },
    },
  },
  plugins: [],
};
export default config;
