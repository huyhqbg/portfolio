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
        'text-opacity': "var(--text-opacity)",
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
      colors: {
        profile: '#ffbe76',
        employment: '#7ed6df',
        education: '#ff7979',
      }
    },
  },
  plugins: [],
};
export default config;
