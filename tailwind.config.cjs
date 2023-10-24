/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
   
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      'primary': {
        50: '#f3f7fc',
        100: '#e6f0f8',
        200: '#c8deef',
        300: '#98c4e1',
        400: '#61a6cf',
        500: '#4e98c5',
        600: '#2c6e9d',
        700: '#25597f',
        800: '#224c6a',
        900: '#214059',
        950: '#16293b',
    },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
