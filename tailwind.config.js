/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBakgroundColor: "#0D1117",
        columnBackgroundColor: "#161C22",
        gradientColor:
          "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
        gradientBorder: "#F2C618",
      },
    },
  },
  plugins: [],
};
