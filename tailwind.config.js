// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "x-12": "12deg",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      colors: {
        // primary: '#b89600',
        // primary: "#EB581E",
        // primary_hover: "#b89600",
        // secondary: "#2D16D3",

        // Theme One color
        theme_one_primary: "#b89600",
        theme_one_primary_hover: "#b89609",
        theme_one_secondary: "#2D16D3",

        global: {
          primary: "var(--global-primary)",
          secondary: "var(--global-secondary)",
          "primary-hover": "var(--global-primary-hover)",
          "secondary-hover": "var(--global-secondary-hover)",
        },
        theme: {
          primary: "var(--theme-primary)",
          secondary: "var(--theme-secondary)",
          "primary-hover": "var(--theme-primary-hover)",
          "secondary-hover": "var(--theme-secondary-hover)",
        },
      },
    },
    container: {
      center: true,
      // padding: "1rem",
      padding: {
        DEFAULT: "0rem", // Default to 0 padding for all screens
        sm: "0rem", // Apply 1rem padding on small and larger screens
        md: "1rem", // Apply 1rem padding on small and larger screens
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-x-12": {
          transform: "rotateX(12deg)",
        },
      });
    },
  ],
};
