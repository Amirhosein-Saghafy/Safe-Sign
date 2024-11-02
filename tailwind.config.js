/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./Views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IranSans", ...defaultTheme.fontFamily.sans],
        IranSansLight: ["IranSansLight", ...defaultTheme.fontFamily.sans],
        IranSansBold: ["IranSansBold", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rtl": {
          direction: "rtl",
        },
        ".ltr": {
          direction: "ltr",
        },
      });
    },
  ],
};
