import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        google: {
          blue: "#1A73E8",
          "blue-light": "#E8F0FE",
          "blue-mid": "#4285F4",
          green: "#34A853",
          "green-light": "#E6F4EA",
          red: "#EA4335",
          "red-light": "#FCE8E6",
          yellow: "#FBBC04",
          "yellow-light": "#FEF7E0",
          gray: "#5F6368",
          "gray-light": "#F8F9FA",
          "gray-border": "#E8EAED",
          dark: "#202124",
        },
        brand: {
          50: "#E8F0FE",
          100: "#D2E3FC",
          200: "#AECBFA",
          300: "#7BAAF7",
          400: "#4285F4",
          500: "#1A73E8",
          600: "#1765CC",
          700: "#1557AE",
          800: "#0F4699",
          900: "#0D3B80",
          950: "#082966",
        },
      },
      fontFamily: {
        sans: ["'Google Sans'", "'DM Sans'", "system-ui", "sans-serif"],
        display: ["'Google Sans Display'", "'Google Sans'", "system-ui", "sans-serif"],
        mono: ["'Roboto Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "google-gradient":
          "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #EA4335 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #1A73E8 0%, #4285F4 100%)",
        "hero-subtle":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,115,232,0.06), transparent)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(60,64,67,0.08), 0 4px 12px rgba(60,64,67,0.06)",
        "card-hover": "0 2px 8px rgba(60,64,67,0.12), 0 8px 24px rgba(60,64,67,0.08)",
        "button-blue": "0 1px 3px rgba(26,115,232,0.3)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
