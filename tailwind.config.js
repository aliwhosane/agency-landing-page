/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    maxWidth: {
      "1/2": "50vh",
    },
    extend: {
      inset: {
        "-right-21": { right: "-21%" },
      },
      height: {
        inherit: "inherit",
      },
      width: {
        banner: "70%",
      },
      grayscale: {
        100: "100%",
        0: "0%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "salmon-pink": { default: "#FF9AA2" },
        melon: { default: "#FFB7B2" },
        "pale-orange": { default: "#FFDAC1" },
        "dirty-white": { default: "#E2F0CB" },
        mint: { default: "#B5EAD7" },
        "crayola-blue": { default: "#C7CEEA" },
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#F79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "right-bg": "url('/basic-bg-right.png')",
      },
    },
  },
  plugins: [],
};
