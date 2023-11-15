/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        playpen: ["Playpen Sans", "cursive"],
        ubermove: ["Uber Move Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
