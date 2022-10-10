/** @type {import('tailwindcss').Config} */

const flowbite = require('flowbite/plugin');

module.exports = {
  content: ['./src/views/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite],
};
