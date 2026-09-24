import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // Alias @/ attendu par la CLI shadcn (registry @react-bits), voir components.json.
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // La forme déclarative précédente — { vendor: ['react', 'react-dom', ...] } —
        // ne capturait pas react-dom : l'application importe `react-dom/client`, qui
        // est un identifiant de module différent. React se retrouvait donc dans le
        // chunk applicatif (62 ko gzip), invalidé à chaque déploiement.
        // La forme fonction range tout node_modules dans `vendor`, qui devient
        // stable en cache tant que les dépendances ne changent pas.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
