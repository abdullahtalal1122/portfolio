/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'main': '#FD6F00', 
        'background' : '#EDECEC'
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'], 
      },
      
    },
  },
  plugins: [],
};
