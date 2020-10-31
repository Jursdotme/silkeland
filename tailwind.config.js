module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {
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
      },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
