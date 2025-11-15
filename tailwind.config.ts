import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-surface': '#1e1b3c',
        'dark-text': '#e2e8f0',
        'dark-text-muted': '#cbd5e1',
        'primary': '#a78bfa',
        'secondary': '#ec4899',
        'accent': '#06b6d4',
      },
      fontFamily: {
        heading: ['Oxanium', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #0f172a 0%, #2d1b69 50%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
export default config;