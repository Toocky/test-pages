export default [
  {
    ignores: [
      '.git/**',
      '.github/**',
      'node_modules/**',
      '.nuxt/**',
      'dist/**',
      '.output/**',
      '**/*.vue', // Explicitly ignore Vue files
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        defineNuxtConfig: 'readonly',
        useNuxtApp: 'readonly',
        defineNuxtPlugin: 'readonly',
        useRuntimeConfig: 'readonly',
      },
    },
    rules: {
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
]
