const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

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
          50: '#edf3df',
          100: '#d8e5ba',
          200: '#c3d795',
          300: '#aec96f',
          400: '#99bb4a',
          500: '#7e9e3e',
          600: '#648133',
          700: '#4c6327',
          800: '#34461c',
          900: '#1e2910',
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

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          background:
            'linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      const textShadows = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px black',
        },
        '.text-shadow-md': {
          'text-shadow': '4px 4px 8px black',
        },
        '.text-shadow-lg': {
          'text-shadow': '15px 15px 30px black',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
        '.svg-shadow': {
          '-webkit-filter': 'drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))',
          filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))',
        },
      }

      addUtilities(textShadows, ['responsive', 'hover'])
    }),
  ],
}
