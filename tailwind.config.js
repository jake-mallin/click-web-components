module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  colors: {
    blue: '#1fb6ff',
    purple: '#7e5bef',
    pink: '#ff49db',
    orange: '#ff7849',
    green: '#13ce66',
    yellow: '#ffc82c',
    'gray-dark': '#273444',
    gray: '#8492a6',
    'gray-light': '#d3dce6',
  },
  fontFamily: {
    sans: ['Lexend', 'sans-serif'],
    serif: ['serif'],
  },
  extend: {
    spacing: {
      128: '32rem',
      144: '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
  plugins: [],
};
