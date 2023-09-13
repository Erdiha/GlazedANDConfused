const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-red': '#FF6B6B',
        'primary-pink': '#ff52a2',
        'primary-blue': '#4D96FF',
        'primary-yellow': '#FFD93D',
        'primary-green': '#6BCB77',
        'primary-offWhite': '#FAF3F0',
      },
      fontFamily: {
        main: ['ui-sans-serif', 'system-ui'],
        subMain: ['Henny Penny', 'cursive'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        alt1: ['Oswald'],
        alt2: ['"Open Sans"'],
      },
      screens: {
        xs: '0px',
        sm: '640px',
        md: '768px',
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
