/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ({ opacityValue }) =>
          opacityValue === undefined
            ? "#FE4C00"
            : `rgba(254, 76, 0, ${opacityValue})`,
      },
    },
  },
  plugins: [],
};
