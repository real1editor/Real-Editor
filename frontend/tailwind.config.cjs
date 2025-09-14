module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinematic: {
          900: '#05061a',
          800: '#071226',
          700: '#0b1220',
          accent: '#4f46e5', // electric indigo
          cyan: '#00d1ff'
        }
      }
    },
  },
  plugins: [],
};
