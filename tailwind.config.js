/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "7/1": "6 / 1",
        "6/1": "6 / 1",
        "4/1": "4 / 1",
        "5/1": "5 / 1",
        "5/2": "5 / 2",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
