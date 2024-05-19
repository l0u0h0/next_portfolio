/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jalnan: ['Jalnan', 'san-serif'],
        jalnangothic: ['JalnanGothic'],
      },
    },
  },
  plugins: [],
};
