<script setup>
// Import useHead from #imports instead of @unhead/vue
import { useHead, useColorMode } from '#imports'

/* // Force dark mode
const colorMode = useColorMode()
colorMode.preference = 'dark' */

// Dynamic head configuration can be added here if needed
// For example, you could add a title template
/* useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - APIpie.ai`
      : 'APIpie.ai - Global AI Health Dashboard'
  },
}) */
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
body {
  @apply antialiased font-secondary text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>
