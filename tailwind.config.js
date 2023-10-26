/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "**/*.{html,js}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        darkBlue: "hsl(221,72%,18%)",
        lightGrey: "hsl(237,12%,70%)",
        darkGrey: "hsl(237,7%,49%)",
        darkRed: "hsl(349,79%,17%)",
        brown: "hsl(355,38%,37%)",
        whitesmoke: "hsl(0,0%,96%)",
        whitesmoketwo: "hsl(0,0%,97%)",
        lightBlue: "hsl(204, 100%, 29%)",
        lightBlued: "hsl(221, 72%, 59%)",
      },
    },
    plugins: [require("tw-elements/dist/plugin")],
  },
};
