import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm hunting-lodge palette
        cream: {
          50: '#FAF7F2',
          100: '#F4EFE6',
          200: '#E8DFD0',
        },
        bark: {
          // Warm browns (bark of an oak)
          50: '#F2EBE3',
          100: '#D9C9B6',
          200: '#B69A78',
          300: '#8B6F47',
          400: '#6E5234',
          500: '#5C4033',
          600: '#3E2A20',
          700: '#2A1C15',
        },
        forest: {
          // Hunters' green
          50: '#EAEFE7',
          100: '#B8C7B0',
          200: '#7E9576',
          300: '#557051',
          400: '#3D5A3D',
          500: '#2C432C',
          600: '#1E2F1E',
        },
        burgundy: {
          // Accent — hunter red
          500: '#722F37',
          600: '#5E2329',
        },
        gold: {
          // Przygaszone złoto — cienkie ramki, akcenty dekoracyjne
          DEFAULT: '#B08D57',
          400: '#C9A874',
          500: '#B08D57',
          600: '#8C6F44',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3E2A20',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
