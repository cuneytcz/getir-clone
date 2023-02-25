/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./app/**/*.{js,ts,jsx,tsx}",
          "./containers/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               colors: {
                    indigo: {
                         DEFAULT: "#4C3398",
                         50: "#B2A3E0",
                         100: "#A593DB",
                         200: "#8C75D1",
                         300: "#7256C6",
                         400: "#5B3DB7",
                         500: "#4C3398",
                         600: "#37256E",
                         700: "#221744",
                         800: "#0D091A",
                         900: "#000000",
                    },
               },
               container: {
                    center: true,
                    padding: {
                         DEFAULT: "0.25rem",
                         sm: "1rem",
                         lg: "3rem",
                         xl: "4rem",
                         "2xl": "5rem",
                    },
               },
          },
     },
     plugins: [],
};
