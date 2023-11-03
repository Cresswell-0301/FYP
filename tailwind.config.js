/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      borderWidth: {
        '100': '100px',
        '200': '200px',
      },

      zIndex: {
        '100':100,
        '101':101,
      },

      width: {
        '800': '800px',
        'full*5': '500%',
      },

      height: {
        '400': '400px',
        '500': '500px',
      },

      borderRadius: {
        '10': '10px',
        '40': '40px',
      },

      transitionDuration: {
        '2000': '2s',
      },

      padding: {
        '1.25': '5px',
        '13': '50px',
      },

      margin: {
        '1.75': '7px',
        '3.75': '15px',
        '460': '460px',
      },

      maxWidth: {
        'full*5': '500px',
      }

    },
  },
  plugins: [],
}
