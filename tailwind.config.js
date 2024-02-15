/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1536px' },
      // => @media (max-width: 1536px) { ... }

      xl: { max: '1280px' },
      // => @media (max-width: 1280px) { ... }

      lg: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      sm: { max: '640px' },
      // => @media (max-width: 640px) { ... }
    },
    extend: {
      fontSize: {
        base: '62.5%',
      },
      fontFamily: {
        serif: ['Raleway', 'serif'],
        sans: ['PT Sans', 'sans-serif'],
      },
      colors: {
        dark: {
          10: '#18181A',
          15: '#242426',
          20: '#303033',
          25: '#3C3C40',
          30: '#48484D',
          35: '#535359',
        },
        light: {
          80: '#C9CACC',
          83: '#D4D4D4',
          86: '#DBDBDB',
          89: '#E3E3E3',
          92: '#EBEBEB',
          95: '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
};
