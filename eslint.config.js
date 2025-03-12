import globals from 'globals';

export default [
  {
    ignores: [
      '.git/**',
      '.github/**',
      'node_modules/**',
      '.nuxt/**',
      'dist/**',
      '.output/**',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
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
  {
    files: ['**/*.vue'],
    rules: {
      // Disable rules that cause issues with Vue files
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
];
