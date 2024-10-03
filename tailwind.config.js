/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": '#606060',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

