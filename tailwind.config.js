/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "background-primary": "#F6FDF9",
        "background-primary": "#E3F3F9",
        primary: "#090909",
        secondary: "#F5F8FA",
        "brand-primary": "#0CD21D",
        "brand-secondary": "#D31512",
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
