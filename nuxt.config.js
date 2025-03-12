// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target: static site generation
  ssr: false,

  target: 'static',

  // GitHub Pages deployment
  app: {
    baseURL: process.env.npm_package_name
      ? `/${process.env.npm_package_name}/`
      : '/',
    head: {
      title: 'APIpie.ai - Global AI Health Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'description',
          content:
            'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:site_name',
          content: 'APIpie.ai - Global AI Health Dashboard',
        },
        {
          property: 'og:url',
          content: 'https://apipie.ai',
        },
        {
          property: 'og:title',
          content: 'APIpie.ai - Global AI Health Dashboard',
        },
        {
          property: 'og:description',
          content:
            'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:url',
          content: 'https://apipie.ai',
        },
        {
          name: 'twitter:title',
          content: 'APIpie.ai - Global AI Health Dashboard',
        },
        {
          name: 'twitter:description',
          content:
            'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Plugins
  plugins: ['~/plugins/vue-echarts.js', '~/plugins/composables.js'],

  // Auto import components
  components: true,

  // Modules
  modules: [
    // https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://vite-pwa-org.netlify.app/frameworks/nuxt
    '@vite-pwa/nuxt',
  ],

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },

  // PWA configuration
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'APIpie.ai - Global AI Health Dashboard',
      short_name: 'APIpie Dashboard',
      description:
        'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
      theme_color: '#00A279',
      icons: [
        {
          src: 'assets/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

  // Build configuration
  build: {
    transpile: ['echarts', 'vue-echarts'],
  },

  // Vite configuration
  vite: {
    optimizeDeps: {
      include: ['echarts', 'vue-echarts'],
    },
  },

  compatibilityDate: '2025-03-12',
})
