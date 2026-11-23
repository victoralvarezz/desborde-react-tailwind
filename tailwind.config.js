/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#151515',
        paper: '#f3f0e8',
        lime: '#e9ff58',
        coral: '#ff6b53',
        cobalt: '#596dff'
      },
      boxShadow: {
        brutal: '7px 7px 0 #151515',
        'brutal-sm': '4px 4px 0 #151515'
      },
      fontFamily: {
        display: ['Arial Black', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
