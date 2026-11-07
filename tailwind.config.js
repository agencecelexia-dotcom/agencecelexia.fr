/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Toute la palette dérive du violet du logo, échantillonné dans
        // public/logo.png : #8C52FF. Rien n'est repris de la palette Tailwind.
        violet: {
          50: '#F4EFFF',
          100: '#E7DCFF',
          200: '#CFB9FF',  // texte secondaire SUR les bandes profondes
          300: '#B490FF',  // filets et numéros SUR les bandes profondes
          400: '#9E6DFF',
          500: '#8C52FF',  // la marque — éléments non textuels
          600: '#6E32E6',  // boutons et liens sur fond clair (le 500 ne passe pas AA)
          700: '#5620C4',
          800: '#3A1580',
          900: '#1F0D3D',  // les bandes pleine largeur
          950: '#150827',
        },
        // Papier lavande : le fond principal de la direction visuelle.
        brume: {
          50: '#FAF9FC',
          100: '#F0EDF6',
          200: '#E4DFED',
          300: '#D1C9E0',
        },
        citron: { 100: '#F0F3D7', 300: '#DDE7A3', 800: '#404A21' },
        // Texte : noir violacé, jamais neutre.
        encre: {
          500: '#6B6480',
          600: '#514A66',
          700: '#2A2340',
          800: '#1A1425',
          900: '#120E1A',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Échelle commune aux titres éditoriaux et pages secondaires.
        'display-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.045em' }],
        'display-md': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.045em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.04', letterSpacing: '-0.055em' }],
        'display-xl': ['5.5rem', { lineHeight: '1.02', letterSpacing: '-0.055em' }],
      },
      spacing: {
        section: '6rem',
        'section-lg': '9rem',
      },
      maxWidth: {
        prose: '63ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        // Hiérarchie par filets et par fonds, pas par profondeur.
        soft: '0 1px 2px rgba(26, 20, 37, 0.04)',
        card: '0 2px 10px rgba(26, 20, 37, 0.05)',
        lift: '0 10px 34px rgba(31, 13, 61, 0.10)',
      },
    },
  },
  plugins: [],
}
