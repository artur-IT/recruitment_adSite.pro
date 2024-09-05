/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        "bebas-neue": ['"Bebas Neue"', "cursive"],
      },
    },
  },
  plugins: [],
};
