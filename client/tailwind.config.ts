import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#000",
        secondary: "#8D7E61",
        accent: "#012622",
        primaryWhite: "#F9F9F9",
        white: "#FFFFFF",
        green: "#198754",
        transparentWhite: "rgba(255,255,255,0.3)",
        transparent: "transparent",
        primaryRed: "#DC0D0D",
        primaryBlack: "#000000",
        primaryPink: "#ff69b4",
        bg1: "#F8F6F3",
        bg2: "#F3F0EB",
        text1: "#171414",
        text2: "#424242",
        text3: "#9D7C5D",
        deco1: "#AD9B87",
        deco2: "#D3C6B4",
        primaryAdmin: "#005596",
      }
    },
  },
  plugins: [],
};
export default config;
