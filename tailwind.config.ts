import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d7fe63",
        secondary: "#6e7d3f",
        backgroundLight: "#fefefe",
        background: "#464646",
        backgroundDark: "#333333",
        backgroundDarker: "#1d1d1d",
      },
    },
  },
  plugins: [],
} satisfies Config;
