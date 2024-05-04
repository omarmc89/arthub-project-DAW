module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
          'shark': {
            '50': '#f3f7f8',
            '100': '#e1e9ec',
            '200': '#c6d6db',
            '300': '#9fb8c1',
            '400': '#7093a0',
            '500': '#557785',
            '600': '#496371',
            '700': '#40535e',
            '800': '#3a4850',
            '900': '#333e46',
            '950': '#232c33',
        },
      }
    },
  },
  plugins: [
    require('flowbite')
  ],
  mode:'jit'
}