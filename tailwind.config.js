const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
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
      screens: {
        xs: '0px',
        sm: '640px',
        md: ' 768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin.cjs')],
});
