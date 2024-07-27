/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.php', './**/*.php'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f5f6f0',
          100: '#e5e7da',
          200: '#cdd1b7',
          300: '#b3b78d',
          400: '#9fa26d',
          500: '#92935f',
          600: '#7e7b50',
          700: '#666142',
          800: '#57513c',
          900: '#4c4737',
          950: '#1f1c15',
          light: '#cdd1b7',
          DEFAULT: '#1f1c15',
          dark: '#1f1c15',
        },
        orange: {
          50: '#fef6ee',
          100: '#FBF7EE',
          200: '#FBF7EE',
          300: '#f7b47a',
          400: '#f28a45',
          500: '#ef712a',
          600: '#e05116',
          700: '#b93d15',
          800: '#943118',
          900: '#772a17',
          950: '#40130a',
          light: '#fdebd7',
          DEFAULT: '#ef712a',
          dark: '#772a17',
        },
      },
    },
  },
  plugins: [],
};
