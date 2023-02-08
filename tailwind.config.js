/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '120': '60vh',
      },
      backgroundColor: {
        'main-blue' : "#1F1F47",
        'secondary-blue' : "linear-gradient(180deg, #3D3D99 74.48%, rgba(61, 61, 153, 0) 100%) !important"
      }
    },
  },
  plugins: [require("daisyui")],
}