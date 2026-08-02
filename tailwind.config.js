/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond de base : blanc pur. `chaux` sert uniquement aux sections alternées.
        chaux: {
          50: '#FAF9F6',
          100: '#F7F5F1',
          200: '#EFEBE3',
          300: '#E2DCD0',
        },
        // Texte principal. Mat, jamais noir pur. Jamais en fond de section.
        ardoise: {
          600: '#3D4650',
          700: '#2A313A',
          800: '#1B2027',
          900: '#12161B',
        },
        // L'accent unique : filets, numéros de section, boutons.
        // Ne jamais utiliser pour du texte de lecture (4,6:1 sur blanc, trop juste).
        cuivre: {
          50: '#FBF2EC',
          100: '#F5E1D3',
          200: '#EBC4A8',
          300: '#DCA37A',
          400: '#C97E4E',
          500: '#B4622C',
          600: '#9A5122',
          700: '#7C401A',
        },
        // Patine du cuivre : états positifs, validations.
        patine: {
          50: '#EEF5F2',
          500: '#4A7C6F',
          600: '#3D6459',
        },
        // Texte secondaire, bordures, filets.
        acier: {
          200: '#E3E6E9',
          300: '#C7CCD2',
          400: '#A8AEB6',
          500: '#8A9099',
          600: '#6B7178',
        },
      },
      fontFamily: {
        // Une seule superfamille variable (axes wght 100-900 + wdth 62-125%),
        // self-hostée. Les chasses passent par .font-narrow / .font-expanded.
        sans: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        // Ombres volontairement minimales : la hiérarchie passe par les filets
        // et l'alternance blanc / chaux, pas par la profondeur.
        soft: '0 1px 2px rgba(27, 32, 39, 0.04)',
        card: '0 2px 8px rgba(27, 32, 39, 0.05)',
        'card-hover': '0 6px 20px rgba(27, 32, 39, 0.08)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
