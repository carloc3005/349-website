/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flyAcrossAndDisappear: {
          '0%': { transform: 'translateX(-100%)', opacity: '1' }, 
          '70%': { transform: 'translateX(0vw)', opacity: '1' }, 
          '100%': { transform: 'translateX(50vw)', opacity: '0' }, 
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        flyAcrossAndDisappear: 'flyAcrossAndDisappear 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
        scroll: 'scrollLeft 20s linear infinite',
      },
    },
  },
  plugins: [],
}
