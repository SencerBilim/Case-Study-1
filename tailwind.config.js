/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': "#78350F",
        "yellow-b": "#FBBF24",
        "dark-blue": "#0F172A",
        'custom-yellow': '#FEF3C7',
        "light-yellow": "#FFFAF0"
        

      },
      boxShadow: {
        'custom-1': '0px 0px 10px 0px #00000012',
        'custom-2': '0px 20px 25px -5px #0000001A',
        "custom-3": '0px 10px 15px -3px #0000001A',
      },
    },
  },
  plugins: [],
}

