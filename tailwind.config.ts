import { withUt } from 'uploadthing/tw';
import type { Config } from "tailwindcss";

const config: Config = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8",
          dark: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#e11d48",
          hover: "#be123c",
        },
        light: "#f8fafc",
        dark: "#111827",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-outfit)", "sans-serif"],
        heading: ["var(--font-inter)", "var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        sm: "12px",
        DEFAULT: "20px",
        lg: "32px",
        pill: "100px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.02)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.02)",
        hover: "0 10px 15px -3px rgba(0, 0, 0, 0.02)",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        morphBlob: "morphBlob 8s ease-in-out infinite",
        paused: "paused",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        morphBlob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
    },
  },
  plugins: [],
}) as Config;

export default config;
