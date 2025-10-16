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
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0"
          },
          "100%": {
            backgroundPosition: "1000px 0"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          }
        }
      },
      animation: {
        "intro": "spin 0.5s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "typing": "typing 1s steps(10) 1 alternate, blink .7s infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "gradient-shift": "gradient-shift 3s ease infinite"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} satisfies Config

export default config