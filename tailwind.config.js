/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        btnYellow: '#FFF96C',
        btnGray: '#E3E3E3',
        btnPink: '#FE84AA',
        btnIndigo: '#442665',
        linkTextColor: '#442665',
        btnPurple: '#E4BBE3'
      }
    },
  },
  plugins: [],

}

