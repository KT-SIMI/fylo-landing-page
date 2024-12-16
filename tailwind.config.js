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
        'footer': "hsl(216, 53%, 9%)"
      },
      fontFamily: {
        "raleway": ["Raleway"],
        "open": ["Open Sans"]
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};

