module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ["active", "group-hover"],
      translate: ["active", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
