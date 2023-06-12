/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        grayOverlay: 'rgba(0, 0 ,0 ,0.2)',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/back.jpg')",
        
      }
    },
  },
  plugins: [],
}

