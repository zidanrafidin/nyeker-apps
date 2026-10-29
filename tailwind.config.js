/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        kuning: '#F5B301',
        merah: '#E2231A',
        hitam: '#141110',
        cream: '#FAF4E6',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brutal: '6px 6px 0 0 #141110',
        'brutal-sm': '4px 4px 0 0 #141110',
        'brutal-lg': '10px 10px 0 0 #141110',
        'brutal-red': '6px 6px 0 0 #E2231A',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'spin-slow': 'spinSlow 16s linear infinite',
      },
    },
  },
  plugins: [],
}
