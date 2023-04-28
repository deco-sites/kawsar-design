/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#18181b",
        "primary-dark": "#09090b",
        "primary-light": "#a1a1aa",
        secundary: "#71717a",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
