import nuxt from '@nuxtjs/eslint-config/eslint.config.js';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['.git', '.github', 'node_modules', '.nuxt', 'dist', '.output'],
  },
  nuxt,
  {
    plugins: {
      vue,
    },
    rules: {
      // Add your custom rules here
    },
  },
  prettier,
];
