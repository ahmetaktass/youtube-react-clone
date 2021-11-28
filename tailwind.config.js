module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'background-dark-primary': 'rgba(33, 33, 33, 0.95)',
        'background-dark-secondary': '#0f0f0f',
        'primary-color': '#030303',
        'secondary-color': '#aaa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
