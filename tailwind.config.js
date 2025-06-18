/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#15202b",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(300px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      flex: {
        3: "1 1 calc(50% - 20px)",
      },
    },
  },

  //   plugins: [require("@tailwindcss/typography"), "prettier-plugin-tailwindcss"],
  darkMode: "class",
};
