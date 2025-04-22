import type { Config } from "tailwindcss"
const shadcnConfig = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...shadcnConfig.theme.extend,
      colors: {
        navy: "#0C0F24",
        gold: "#D4AF37",
        "gold-dark": "#B3941F",
        terracotta: "#E27D60",
        sage: "#5CDB95",
        "light-gray": "#F5F5F5",
        "medium-gray": "#ADADAD",
        "dark-gray": "#333333",
        ...shadcnConfig.theme.extend.colors,
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/hero-bg.jpg')",
        "about-pattern": "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/about-bg.jpg')",
        "giving-pattern": "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/giving-bg.jpg')",
        "services-pattern":
          "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/services-bg.jpg')",
        "listings-pattern":
          "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/listings-bg.jpg')",
        "resources-pattern":
          "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/resources-bg.jpg')",
        "contact-pattern":
          "linear-gradient(rgba(12, 15, 36, 0.7), rgba(12, 15, 36, 0.7)), url('/images/contact-bg.jpg')",
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [...shadcnConfig.plugins],
}

export default config
