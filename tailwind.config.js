module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        blue: {
          500: '#1a73e8',
        },
        slate: {
          100: '#f8f9fa',
          200: '#dadce0',
        },
        gray: {
          300: '#dfe1e5',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
