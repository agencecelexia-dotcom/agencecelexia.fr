import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // `references/` contient des repos tiers clonés (voir CLAUDE.md) et `claude-seo`
  // un plugin vendorisé : ni l'un ni l'autre n'est notre code.
  // `public/proposition/` est un mini-site vanilla autonome, servi tel quel et
  // hors du graphe de build Vite : ses fonctions sont appelées depuis le HTML,
  // ce qu'ESLint ne peut pas voir.
  globalIgnores(['dist', 'dist-ssr', 'references', 'claude-seo', 'N8N & Claude', 'public/proposition']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
