module.exports = {
  purge: [
    './src/**/*.html', // When building for production, be sure to configure the purge option to remove any unused classes for the smallest file size
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
