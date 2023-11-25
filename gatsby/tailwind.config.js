/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#363636",
        "primary-hover": "#858585",
        "primary-active": "#FEFEFE",
        "primary-on-dark": "#FEFEFE",
        "accent-bg": "#bffdfd",
        accent: "#0878e7",
        white: "#FEFEFE",
        "primary-alt": "#616161",
        "accent-alt": "#2e42b1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
