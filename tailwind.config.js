/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        playpen: ["Playpen Sans", "cursive"],
        ubermove: ["Uber Move Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
