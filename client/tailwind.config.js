/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{html,ts,tsx}",
    "./src/components/**/*.{html,ts,tsx}",
    "./src/layout/**/*.{html,ts,tsx}",
  ],
  darkMode: "class",
  mode: "jit",

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif", "ui-sans-serif", "system-ui"],
        montserrat: ["Montserrat", "sans-serif", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#0D6EFD",
        secondary: "#6C757D",
        success: "#198754",
        danger: "#DC3545",
        warning: "#FFC107",
        info: "#0DCAF0",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      borderRadius: {
        xl: "0.7rem", /* 12px */
      },
      padding: {
        '2': '0.5rem',
      },

      backgroundImage: {
        'radial-gradient': 'radial-gradient(123.88% 123.88% at 50% 11.94%, #5855E8 5.73%, #1577FF 100%)',
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

