/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}
