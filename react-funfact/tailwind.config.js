/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "/images/reactjs-icon-dark.png",
        bgCover: "/images/rectangle.png",
      },

      boxShadow: {
        shd: "0px 1px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
