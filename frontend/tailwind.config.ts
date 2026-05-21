import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aurora: {
          bg: "#F6F1EA",
          surface: "#EFE8DE",
          elevated: "#FBF7F1",
          border: "rgba(42, 37, 34, 0.10)",
          "border-med": "rgba(42, 37, 34, 0.16)",
          text: "#1F1A17",
          "text-2": "#6F625A",
          "text-3": "#9A8E86",
          primary: "#D94A45",
          "primary-hover": "#C83F3A",
          success: "#2F7D4C",
          warning: "#B97818",
          danger: "#A83232",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: [
          "DM Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
