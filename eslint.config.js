import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['.git', '.github', 'node_modules', '.nuxt', 'dist', '.output'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // Use @typescript-eslint/parser to parse <script> tags
        parser: {
          js: 'espree',
          ts: 'espree',
          '<template>': 'espree',
        },
        extraFileExtensions: ['.vue'],
      },
      globals: {
        defineNuxtConfig: 'readonly',
        useNuxtApp: 'readonly',
        defineNuxtPlugin: 'readonly',
        useRuntimeConfig: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        onMounted: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
      },
    },
    rules: {
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
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
        useRuntimeMatch: 'readonly',
      },
    },
    rules: {
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
];
