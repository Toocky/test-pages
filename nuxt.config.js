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
  plugins: ['~/plugins/vue-echarts.js'],

  // Auto import components
  components: true,

  // Modules
  modules: [
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://vite-pwa-org.netlify.app/frameworks/nuxt
    '@vite-pwa/nuxt',
    // https://ui.nuxt.com/
    '@nuxt/ui',
    // https://nuxt.com/modules/lodash
    'nuxt-lodash',
    // https://nuxt.com/modules/viewport
    'nuxt-viewport',
    // https://nuxt.com/modules/open-fetch
    'nuxt-open-fetch',
    // https://nuxt.com/modules/icons
    'nuxt-icons',
    // https://vueuse.org/nuxt/README.html
    '@vueuse/nuxt',
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            primary: ['IBM Plex Sans', 'sans-serif'],
            secondary: ['Inter', 'sans-serif'],
          },
        },
      },
    },
  },

  typescript: {
    shim: false,
  },

  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    defaultBreakpoints: {
      desktop: 'xl',
      mobile: 'xs',
      tablet: 'md',
    },
    fallbackBreakpoint: 'lg',
  },
  colorMode: {
    preference: 'dark',
  },

  icon: {
    serverBundle: {
      collections: ['heroicons-outline', 'simple-icons'],
    },
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
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
    plugins: [
      {
        name: 'vite-plugin-glob-transform',
        transform(code, id) {
          if (id.includes('nuxt-icons')) {
            return code.replace(
              /as:\s*['"]raw['"]/g,
              'query: "?raw", import: "default"',
            )
          }
          return code
        },
      },
    ],
  },

  // Auto-import composables
  imports: {
    dirs: ['composables'],
  },

  // TypeScript configuration
  typescript: {
    strict: true,
  },

  compatibilityDate: '2025-03-12',
})
