module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "hsl(300deg 100% 50%)",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
