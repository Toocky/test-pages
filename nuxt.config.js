export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // https://nuxtjs.org/deployments/github-pages/
  router: {
    base: `/${process.env.npm_package_name}` || '',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'APIpie.ai - Global AI Health Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'APIpie.ai - Global AI Health Dashboard',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://apipie.ai',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'APIpie.ai - Global AI Health Dashboard',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://apipie.ai',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'APIpie.ai - Global AI Health Dashboard',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-echarts.js', mode: 'client' },
    { src: '~/plugins/composables.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt/postcss8
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'APIpie.ai - Global AI Health Dashboard',
      short_name: 'APIpie Dashboard',
      description: 'Your Global AI Health Dashboard - Monitor AI model availability and performance.',
      lang: 'en',
      theme_color: '#00A279',
    },
  },

  // colorMode config: https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['echarts', 'resize-detector', 'tslib', 'vue-echarts'],
  },
}
