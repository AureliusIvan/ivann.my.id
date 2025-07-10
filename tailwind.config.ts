import {fontFamily} from "tailwindcss/defaultTheme";
import type {Config} from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{md,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryLight: '#FFFFFF', // Example light mode background
        textPrimaryLight: '#000000', // Example light mode text
        primaryDark: '#121212', // Dark mode background
        textPrimaryDark: '#E0E0E0', // Dark mode text
        accentDark: '#BB86FC', // Example accent color for dark mode
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        spin: {
          from: {transform: "rotate(0deg)"},
          to: {transform: "rotate(360deg)"}
        }
      },
      animation: {
        "intro": "spin 0.5s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "typing": "typing 1s steps(10) 1 alternate, blink .7s infinite alternate"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config