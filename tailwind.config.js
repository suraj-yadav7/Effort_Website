/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm':{'min': '441px','max':'880px' },
      'md': {'min':'881px','max':'1023px'},
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1440px',
      'phone': { 'raw': '(max-width: 440px)' },
    },
  },
  plugins: [],
}

