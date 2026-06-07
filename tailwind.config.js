/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        brand: '#165DFF',
        'brand-dark': '#1248CC',
        'brand-light': '#E8F0FF',
        deep: '#1D2129',
        surface: '#F5F7FA',
      },
      maxWidth: {
        content: '1200px',
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
