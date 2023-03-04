/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      red: '#FF5252',
      purple: '#A445ED',
      white: '#FFFFFF',
      gray: {
        100: '#F4F4F4',
        300: '#E9E9E9',
        500: '#757575',
        700: '#3A3A3A',
        800: '#2D2D2D',
        900: '#1F1F1F',
        1000: '#050505',
      },
    },
    fontFamily: {
      inconsolata: ['Inconsolata', 'monospace'],
      inter: ['Inter', 'sans-serif'],
      lora: ['Lora', 'serif'],
    },
    boxShadow: {
      base: '0px 5px 30px rgba(0, 0, 0, 0.1);',
    },
  },
  plugins: [],
};
