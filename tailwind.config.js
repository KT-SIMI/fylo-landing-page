/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'regular': "hsl(218, 28%, 13%)",
        'head-btn': "hsl(198, 60%, 50%)",
        'demo-link': "hsl(176, 68%, 64%)",
        'testimonial': "hsl(219, 30%, 18%)",
        'signup': "hsl(217, 28%, 15%)",
        'footer': "hsl(216, 53%, 9%)",
      },
      fontFamily: {
        "raleway": ["Raleway"],
        "open": ["Open Sans"]
      },
      height: {
        "nav": "60vh",
        "nav-2": "50vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh"
      },
      spacing: {
        "nav-top": "-2000px",
        '20%': "20%",
        '5%': "5%",
        '10%': "10%"
      },
      zIndex: {
        'nav-z': "-1",
        'Nav-Z': "99"
      },
    },
    screens: {
      'sm': '640px',
      'max-sm': { max: "640px" },
      'md': '768px',
      'max-md': { max: "768px" },
      'lg': '1024px',
      'max-lg': { max: "1024px" },
      'xl': '1280px',
      'max-xl': { max: "1280px" },
      '2xl': '1536px',
      'max-2xl': { max: "1536px" }
    }
  },
  plugins: [],
};

