/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tan': '#c4994c',
      },
      fontFamily: {
        'head': 'Poppins',
      },
      spacing: {
        'bb': '500px',
      },
    },
  },
  plugins: [],
}