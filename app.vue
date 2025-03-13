<script setup>
const config = useRuntimeConfig();

useHead({
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
  link: [{ rel: 'icon', type: 'image/x-icon', href: `${config.public.baseURL || ''}favicon.ico` }],
});
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
