/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        // name: "hash code",
        light: '#fafaf9',
        darkTrans: 'rgba(0,0,0,.4)',
        sand: '#908985',
        darkSand: '#57534e',
      }
    },
  },
  plugins: [],
};
