/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0f',
        'dark-surface': '#12121c',
        'dark-text': '#e0e0e0',
        'dark-text-muted': '#a0a0a0',
        'primary': '#00f5c3',
        'secondary': '#945cff',
      },
      fontFamily: {
        heading: ['Oxanium', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
