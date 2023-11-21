/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textShadow: {
        default: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        // name: "hash code",
        light: '#ecf0f3',
        darkTrans: 'rgba(0,0,0,.4)',
        dark: '#242526',
        dark2: '#18191A'
      }
    },
  },
  plugins: [],
};
