/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Tailwind will scan this file for class names
    "./src/**/*.{js,ts,jsx,tsx}", // and also all JS/TS/React files in src/
  ],
  darkMode: "class", // Enables dark mode via a CSS class (e.g. 'dark')
  theme: {
    extend: {}, // You can extend the default theme here
  },
  plugins: [], // Add Tailwind plugins here if needed
};
