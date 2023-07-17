module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-blue': 'var(--primary-blue)',
        'custom-red': 'var(--primary-red)',
        'custom-yellow': 'var(--primary-yellow)',
        'custom-green': 'var(--primary-green)',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
