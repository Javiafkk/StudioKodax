import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "hero-blob": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.25",
          },
          "50%": {
            transform: "translate(4%, -3%) scale(1.06)",
            opacity: "0.4",
          },
        },
        /**
         * Cohete en el borde del header: ciclo 14s, ~40% en cruce (~5,6s),
         * pausa entre pasadas más corta que con 24s + 22% de cruce.
         */
        "header-rocket-sweep": {
          "0%, 30%": { left: "-9rem", opacity: "0" },
          "31%": { opacity: "1" },
          "71%": { left: "100%", opacity: "1" },
          "72%, 76%": { left: "100%", opacity: "0" },
          "77%, 100%": { left: "-9rem", opacity: "0" },
        },
      },
      animation: {
        "hero-blob": "hero-blob 20s ease-in-out infinite",
        "hero-blob-slow": "hero-blob 28s ease-in-out infinite reverse",
        "header-rocket-sweep":
          "header-rocket-sweep 14s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
