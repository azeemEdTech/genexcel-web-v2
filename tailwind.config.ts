import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy — headlines, text, dark surfaces, structural UI
        primary: {
          50: '#F2F5FA',
          100: '#E3E9F5',
          200: '#C7D2EA',
          300: '#9FB0D6',
          400: '#7086BC',
          500: '#4C639D',
          600: '#37497D',
          700: '#283864',
          800: '#1B2748',
          900: '#101A33',
          950: '#080E1E',
        },
        // Soft blue — secondary accent, School Genomics category tone
        secondary: {
          50: '#EEF4FE',
          100: '#DCE9FD',
          200: '#B9D3FB',
          300: '#8DB8F6',
          400: '#5C97EA',
          500: '#3E7BD6',
          600: '#2E60B3',
          700: '#244B8C',
          800: '#1D3B6E',
          900: '#172F58',
        },
        // Vibrant teal/green — the GenExcel accent: CTAs, highlights, stats
        accent: {
          50: '#ECFDF6',
          100: '#D2FAEA',
          200: '#A6F3D8',
          300: '#6FE6C0',
          400: '#34D2A6',
          500: '#0FAE85',
          600: '#0C8C6B',
          700: '#0A6F56',
          800: '#085945',
          900: '#074A3A',
        },
        // Soft lavender — secondary accent for School Genomics contexts
        lavender: {
          50: '#F4F1FE',
          100: '#E9E3FD',
          200: '#D3C6FB',
          300: '#B6A2F5',
          400: '#9A81ED',
          500: '#8267E0',
          600: '#6B4FC7',
        },
        // Subtle mint — secondary accent for Health & Wellness contexts
        mint: {
          50: '#EFFCF6',
          100: '#DBF8EA',
          200: '#B4EFD3',
          300: '#85E2B8',
          400: '#57CE9B',
          500: '#37B080',
        },
        // Warm white / pale blue-gray — light-mode surfaces
        paper: {
          DEFAULT: '#FBFAF7',
          alt: '#F2F5FA',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(15, 174, 133, 0.18)',
        'glow-lg': '0 0 60px rgba(15, 174, 133, 0.22)',
        'glow-xl': '0 0 80px rgba(15, 174, 133, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(15, 174, 133, 0.1)',
        // Soft, restrained card/surface shadows — the redesign's default
        'soft': '0 1px 2px rgba(16,26,51,.04), 0 8px 24px rgba(16,26,51,.06)',
        'soft-lg': '0 4px 10px rgba(16,26,51,.05), 0 20px 48px rgba(16,26,51,.09)',
        // Legacy aliases kept so existing call sites don't need a rename
        'glass': '0 1px 2px rgba(16,26,51,.04), 0 8px 24px rgba(16,26,51,.06)',
        'glass-lg': '0 4px 10px rgba(16,26,51,.05), 0 20px 48px rgba(16,26,51,.09)',
        'cta': '0 10px 26px rgba(4, 14, 30, .35)',
      },
      borderRadius: {
        'card': '16px',
        'panel': '24px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
