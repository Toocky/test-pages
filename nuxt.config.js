// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineOrganization } from 'nuxt-schema-org/schema';

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
    //'nuxt-echarts',
  ],
  echarts: {
    // Options
    charts: ['BarChart', 'PieChart'],
    renderer: ['svg'],
    components: ['CanvasRenderer', 'GridComponent', 'TooltipComponent', 'LegendComponent'],
    features: ['LabelLayout'],
  },

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
  },

  // Auto-import composables
  imports: {
    dirs: ['composables'],
  },

  // TypeScript configuration
  typescript: {
    strict: true,
  },
  robots: {
    groups: [
      {
        userAgent: ['*'],
        disallow: [
          '/profile/*',
          '*/tags/*',
          '*/cdn-cgi/*',
          '*/category/*',
          '*/v1/*',
          'https://apipie.ai/v1',
          'https://apipie.ai/urlshare',
          'https://apipie.ai/v1/*',
          'https://apipie.ai/urlshare/*',
          'https://apipie.ai/ragtune',
          'https://apipie.ai/ragtune/*',
          'https://apipie.ai/urlshare',
        ],
      },
    ],
    sitemap: [
      '/sitemap.xml',
      '/docs/sitemap.xml',
    ],
  },

  sitemap: {
    exclude: [
      '/profile/*',
      '*/tags/*',
    ],
  },
  schemaOrg: {
    canonicalHost: 'https://apipie.ai', 
    logo: 'https://apipie.ai/img/logo-drk.png',
    identity: defineOrganization({
      name: 'APIpie.ai',
      url: 'https://apipie.ai',
      logo: 'https://apipie.ai/img/logo-drk.png',
      email: 'support@neuronicai.com', 
      sameAs: [ 
        'https://x.com/APIpie_ai',
        'https://www.linkedin.com/company/neuronicaiinc/',
      ],
    }),
  },
  seoUtils: {
    title:'APIpie.ai - AI API Services',
    logo: 'https://apipie.ai/img/logo-drk.png',
    og: {
      type: 'website',
      siteName: 'APIpie.ai',
      logo: 'https://apipie.ai/img/logo-drk.png',
    },
    twitter: {
      card: 'summary_large_image', 
      site: '@APIpie_ai',          
      title: 'APIpie.ai - AI API Services',
      description: 'Your one-stop shop for AI API services.',
    },
    ogType: 'website', 
  },
  ogImage: {
    screens: [
      {
        width: 1200, 
        height: 630, 
      },
    ],
    fonts: [
      'IBM Plex Sans:600',
      'Inter:800',
    ],
    defaults: {
      background: '#00A279',
      textColor: '#FFFFFF',
      fontSize: '64px',
      fontFamily: 'IBM Plex Sans',
      title: 'APIpie.ai',
      theme: '#00dc82',
      colorMode: 'dark',
      icon: 'https://apipie.ai/img/logo-drk.png',
      logo: 'https://apipie.ai/img/logo-drk.png',
      siteLogo: 'https://apipie.ai/img/logo-drk.png',
      siteName:'APIpie.ai',
    },
  },

  site: {
    url: 'https://apipie.ai', 
    name: 'APIpie.ai', 
    description: 'Your one-stop shop for AI API services.',
    defaultLocale: 'en', 
  },
  compatibilityDate: '2025-03-12',
})
