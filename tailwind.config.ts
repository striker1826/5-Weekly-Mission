import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Primary: "#6D6AFE",
        Red: "#FF5B56",
        Black: "#111322",
        White: "#FFFFFF",
        Gray1: "#3E3E43",
        Gray2: "9FA6B2",
        Gray3: "#CCD5E3",
        Gray4: "#E7EFFB",
        Gray5: "#F0F6FF",
      },
      screens: {
        mobile: "767px",
        tablet: "1199px",
      },
    },
  },
  plugins: [],
};
export default config;
