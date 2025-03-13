// https://nuxt.com/docs/guide/directory-structure/app-config
export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    notifications: {
      position: 'top-0 bottom-auto',
      width: 'w-full sm:w-3/12',
    },
    card: {
      background: 'bg-white dark:bg-gray-800',
      body: { padding: 'md:px-5 md:py-5' },
    },
    skeleton: {
      background: 'bg-white dark:bg-gray-700',
    },
  },
})
