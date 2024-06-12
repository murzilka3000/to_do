/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "480": '30rem',
      },
      height: {
        '100': '100vh'
      }
    },
  },
  plugins: [],
}