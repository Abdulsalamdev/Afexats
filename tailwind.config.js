/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "Mulish": "Mulish",
        'Jura' : 'Jura'
      },
      colors: {
        'deepRed': '#DC372F',
      },
      screens: {
        'sm': '500px',
        'md': '670px',
        'lg': '1050px',
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}
