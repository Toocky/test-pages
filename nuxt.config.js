// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Source directory
  srcDir: './',

  // Target: static site generation
  ssr: false,

  // Static site generation
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: true,
    },
  },

  // Global CSS
  css: ['~/assets/css/main.scss'],

  /*   colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'dark',
    forcedTheme: 'dark',
    classPrefix: '',
  }, */

  icon: {
    serverBundle: {
      collections: ['heroicons-outline', 'simple-icons'],
    },
  },
  /*   router: {
    base: `/${process.env.npm_package_name}` || '',
  },
  // Runtime config
  runtimeConfig: {
    public: {
      baseURL: process.env.npm_package_name
        ? `/${process.env.npm_package_name}/`
        : '/',
    },
  }, */
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  // App configuration
  app: {
    baseURL: `/${process.env.npm_package_name}/`, // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
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

  // Plugins
  plugins: ['~/plugins/vue-echarts.js'],

  // Auto import components
  components: true,

  // Modules
  modules: [
    // https://color-mode.nuxtjs.org/
    /*  '@nuxtjs/color-mode', */
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
    '@formkit/auto-animate/nuxt',
    '@nuxt/fonts',
    '@nuxt/devtools',
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
    /*     build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
            const DRIVE_LETTER_REGEX = /^[a-z]:/i
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            return (
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
            )
          },
        },
      },
    }, */
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
