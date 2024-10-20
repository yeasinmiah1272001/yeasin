/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // backgroundImage: {
      //   "main-bg": "url('/bg-img.jpeg')",
      // },
      fontFamily: {
        bodyFont: "Poppins, sans-serif",
      },
      colors: {
        primaryColor: "#FFF7EB",
        btnColor: "#FEC576",
      },
    },
  },
  plugins: [],
};
