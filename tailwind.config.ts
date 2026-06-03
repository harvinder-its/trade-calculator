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
        /* Instagram-inspired brand scale (purple → magenta → pink) */
        brand: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#E1306C",
          600: "#C13584",
          700: "#833AB4",
          800: "#6b2d96",
          900: "#552478",
          950: "#3b1854",
        },
        accent: {
          purple: "#833AB4",
          magenta: "#C13584",
          pink: "#E1306C",
          red: "#FD1D1D",
          orange: "#F77737",
          yellow: "#FCAF45",
          green: "#22c55e",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        /* Official Instagram 45° gradient */
        instagram:
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        /* Brand gradient: purple → pink → orange */
        "instagram-brand":
          "linear-gradient(135deg, #833AB4 0%, #C13584 30%, #E1306C 55%, #F77737 85%, #FCAF45 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(131, 58, 180, 0.35), transparent)",
        "card-glow":
          "radial-gradient(ellipse at center, rgba(225, 48, 108, 0.18), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(225, 48, 108, 0.35)",
        "glow-purple": "0 0 40px rgba(131, 58, 180, 0.35)",
        "glow-orange": "0 0 40px rgba(247, 119, 55, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
