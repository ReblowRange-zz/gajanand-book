content: [
  "./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js",
],
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
  corePlugins: {
    preflight: false,
  },
}
