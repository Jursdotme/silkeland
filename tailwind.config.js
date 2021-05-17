const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  theme: {
    typography: {
      default: {
        css: {
          color: '#685a50',
          h2: {
            color: '#847667',
          },
          h1: {
            color: '#7e9e3e',
          },
          a: {
            color: '#7e9e3e',
            '&:hover': {
              color: '#4c6327',
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {
      height: {
        128: '32rem',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        bgreen: {
          50: '#f4faf6',
          100: '#e3f2ea',
          200: '#d1ebe2',
          300: '#c0e3d7',
          400: '#a5c8be',
          500: '#89aca5',
          600: '#6e918c',
          700: '#537673',
          800: '#375a5a',
          900: '#1c3d3f',
        },
        bsand: {
          50: '#f7f6f4',
          100: '#f9f7f6',
          200: '#cec6bc',
          300: '#b8ab9c',
          400: '#a1917d',
          500: '#847667',
          600: '#685a50',
          700: '#4b413a',
          800: '#2f2723',
          900: '#120e0d',
        },
        amber: colors.amber,
        teal: colors.teal,
      },
      margin: {
        '1/2-w': '50vw',
        '1/3-w': '33.333vw',
        '1/4-w': '25vw',
        '1/5-w': '20vw',
      },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
