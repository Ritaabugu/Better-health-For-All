import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F1",
        "paper-dim": "#F1ECE1",
        ink: "#242420",
        "ink-soft": "#54524A",
        sage: {
          DEFAULT: "#4F6F52",
          light: "#7C9A79",
          dark: "#33472F",
          tint: "#E7EEE3",
        },
        berry: {
          DEFAULT: "#A8455C",
          dark: "#7E3345",
          tint: "#F5E4E7",
        },
        gold: {
          DEFAULT: "#C08A2E",
          dark: "#8F6620",
          tint: "#F6ECD8",
        },
        teal: {
          DEFAULT: "#3E7C8C",
          dark: "#2B5964",
          tint: "#E1EDEF",
        },
        clay: {
          DEFAULT: "#BE6A3B",
          dark: "#8F4E2A",
          tint: "#F3E3D6",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "42rem",
        wide: "72rem",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "18px",
        xl: "28px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(36,36,32,0.04), 0 8px 24px -12px rgba(36,36,32,0.14)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#242420",
            "--tw-prose-headings": "#242420",
            "--tw-prose-links": "#33472F",
            "--tw-prose-bold": "#242420",
            "--tw-prose-quotes": "#54524A",
            "--tw-prose-quote-borders": "#4F6F52",
            maxWidth: "none",
            fontSize: "1.125rem",
            lineHeight: "1.75",
            a: { fontWeight: "600", textDecoration: "underline", textUnderlineOffset: "3px" },
            h2: { fontFamily: "var(--font-fraunces)", fontWeight: "600", marginTop: "2.2em" },
            h3: { fontFamily: "var(--font-fraunces)", fontWeight: "600", marginTop: "1.8em" },
            "ul > li::marker": { color: "#4F6F52" },
            blockquote: { fontStyle: "normal", fontFamily: "var(--font-fraunces)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
