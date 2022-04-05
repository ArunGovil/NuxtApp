module.exports = {
  purge: [],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: "#FF3030",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@nuxtjs/tailwindcss'),
    require('@tailwindcss/forms'),
  ],
};
