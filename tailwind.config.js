export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './plugins/**/*.ts',
    './app.vue',
  ],
  presets: [require('@nuxt/ui/tailwind')],
  theme: {
    extend: {
      fontFamily: {
        primary: ['IBM Plex Sans', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
    },
  },
}
