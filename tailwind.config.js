/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'roboto-bold': ['Roboto_Condensed-Bold', 'sans-serif'],
        'roboto-regular': ['Roboto_Condensed-Regular', 'sans-serif'],
        'roboto-medium': ['Roboto_Condensed-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
