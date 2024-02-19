/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "xs": '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1199px',
      '2xl': '1349px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'popup-opacity': 'popup-opacity 0.3s ease-in-out',
        'popup-scale': 'popup-scale .3s ease-in-out',
      },
      keyframes: {
        'popup-opacity': {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 75 },
        },
        'popup-scale': {
          '0%': { transform: 'scale(0) translateX(-50%)  ' },
          '50%': { transform: 'scale(1.05) translateX(-50%)' },
          '100%': { transform: 'scale(1) translateX(-50%) ' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: '#ebe5e5',
          secondary: 'white',
          'secondary-content': 'black'

        },
        dark: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: '#212121',
          secondary: '#323232',
          'secondary-content': '#999',
          neutral: '#c1cad8'

        },
      },
    ],
  },
}
