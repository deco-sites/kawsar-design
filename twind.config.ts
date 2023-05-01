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
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-75%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '25%': { transform: 'translateX(75%)' },
          '50%': { transform: 'translateX(50%)' },
          '75%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      variants: {
        animation: ['responsive', 'hover'],
      },
      plugins: [],
    },
  },
};
