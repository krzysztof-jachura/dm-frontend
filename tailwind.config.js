/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-background": "#0c0c0c",
        "discord-normal": "#5865f2",
        "discord-hover": "#4c51bf",
      },
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'dark',
      addCommonColors: true,
      themes: {
        dark: {
          layout: {
            hoverOpacity: 0.85,
          },
          colors: {
            danger: '#e20031',
          },
        },
      },
    }),
  ],
};
