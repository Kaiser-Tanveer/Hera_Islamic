/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f57c00",
        "secondary": "#cbd5e1"
      }
    },
  },
  plugins: [],
}