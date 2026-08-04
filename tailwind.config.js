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
        // Blancs cassés teintés violet. Surtout pas de beige : c'est lui qui
        // faisait ressortir le rectangle blanc du logo.
        brume: {
          50: '#FAF8FF',
          100: '#F3EEFC',
          200: '#E8E0F7',
          300: '#D8CCEF',
        },
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
        // Une seule superfamille variable (axes wght 100-900 + wdth 62-125 %),
        // self-hostée. Les chasses passent par .font-narrow / .font-expanded.
        // Le serif éditorial a été retiré le 4 août 2026 : préférence client.
        sans: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Échelle relevée d'un cran par rapport à la v1 : l'aération passe
        // autant par la taille des titres que par les marges.
        'display-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-md': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.04', letterSpacing: '-0.022em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
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
