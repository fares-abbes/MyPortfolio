const { DEFAULT_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px', 
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-primary)",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent:{
            DEFAULT: "var(--color-accent)",
            hover: "var(--color-accent-hover)"
        }
      
        },
      keyframes: {
        
        },
        
       
      },
      animation: {
       
    },
  },
  plugins: [require("tailwindcss-animate")],
}
