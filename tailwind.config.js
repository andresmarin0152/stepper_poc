/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-primary-title": "#3C4257",
        "gray-secondary-text": "#9FA6B2",
        "purple-primary-title": "#7B61FF",
      },
    },
  },
  plugins: [],
};
