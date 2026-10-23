import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#100134",
        dark: "#0a142f",
        shark: "#212529",
        muted: "#afadad",
        "tz-green": "#00a856",
        "tz-blue": "#5fcdfa",
        "tz-red": "#ea422e",
        light: "#f8f9fa",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-onest)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "6.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
