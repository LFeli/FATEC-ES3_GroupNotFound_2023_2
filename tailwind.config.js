/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // fontFamily:{
      //   'poppins':['Poppins', 'sans-serif'],
      // },
      boxShadow:{
        'input': '0 0 0 8px rgba(201, 214, 231, 1);'
      },
    },
  },
  plugins: [],
}

