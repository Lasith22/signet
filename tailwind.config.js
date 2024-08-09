/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        mainTextStyle: ['"Plus Jakarta Sans"', 'sans-serif'],
        secondMainTextStyle: ['"DM Sans"', 'sans-serif'],
        robotoSlab: ['"Roboto Slab"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
