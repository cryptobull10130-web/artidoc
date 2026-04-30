/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0F2942',
        'primary-alt': '#1B3A5C',
        accent: '#F97316',
        'accent-hover': '#EA580C',
      },
    },
  },
  plugins: [],
}
