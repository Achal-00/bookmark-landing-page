const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font-size": "clamp(0.875rem, min(2dvw, 2dvh), 5rem)",
      },
      fontFamily: {
        "custom-font-family": ["Rubik", "sans-serif"],
      },
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "greyish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
});
