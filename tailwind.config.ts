import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        background: "#222222",
        primary: "#7A50D0",
        secondary: "#A986EF",
        light: "#DACBF8",
        foreground: "#FEFDFC",
        primaryHover: "#6844b1",
        premium: "#FFC125",
      },
      fontFamily: {
        balooBhai: ["var(--font-balooBhai)"],
        lilita: ["var(--font-lilita)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
