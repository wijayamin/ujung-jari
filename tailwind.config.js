module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Nunito Sans"'],
      'logo': ['"Squada One"'],
      'icon': ['"Material Icons"']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
