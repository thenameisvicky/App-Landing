/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['11px', '15px'],
      sm: ['13px', '18px'],
      base: ['15px', '18px'],
      lg: ['17px', '20px'],
      xl: ['19px', '22px'],
      '2xl': ['22px', '26px'],
      '3xl': ['26px', '30px'],
      '4xl': ['40px', '48px'],
      '8xl': ['72px', '80px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "medium": "989px",
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
