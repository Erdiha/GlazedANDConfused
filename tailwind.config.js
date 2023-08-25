const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-blue': 'var(--primary-blue)',
        'custom-red': 'var(--primary-red)',
        'custom-yellow': 'var(--primary-yellow)',
        'custom-green': 'var(--primary-green)',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Oswald'],
        body: ['"Open Sans"'],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
});
