/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
      fontFamily: {
        'Catamaran': ["Catamaran", "sans-serif"],
      },
      colors: {
        'pro-light-blue': '#A3C1EF',
        'pro-blue': '#99BAED',
        'pro-dark-blue': '#163561',
        'sky-blue': '#008FDD',
        'sky-light': '#99BAED',
        'sky-shadow': '#5296FF',
        'footer-icon': '#D3E5FF',
        'pro-yellow': '#FBB400',
        'pro-white-1': '#FAFBFF',
        'pro-white-2': '#E5ECFE'
      },
      rotate: {
        '135': '135deg',
      }
    },
  },
  plugins: [],
}

