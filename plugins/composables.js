import { defineNuxtPlugin } from '#app';
import { useViewport } from '~/composables/use-viewport';
import { useToPairs, useOrderBy, useMin, useMax } from '~/composables/use-lodash';
import { useApi } from '~/composables/use-api';

export default defineNuxtPlugin((nuxtApp) => {
  // Create a shared viewport instance
  const viewport = useViewport();
  
  // Make composables available globally
  nuxtApp.provide('viewport', viewport);
  nuxtApp.provide('toPairs', useToPairs);
  nuxtApp.provide('orderBy', useOrderBy);
  nuxtApp.provide('min', useMin);
  nuxtApp.provide('max', useMax);
  nuxtApp.provide('api', useApi);
  
  // Add to globalProperties for options API
  nuxtApp.vueApp.config.globalProperties.$viewport = viewport;
  nuxtApp.vueApp.config.globalProperties.$toPairs = useToPairs;
  nuxtApp.vueApp.config.globalProperties.$orderBy = useOrderBy;
  nuxtApp.vueApp.config.globalProperties.$min = useMin;
  nuxtApp.vueApp.config.globalProperties.$max = useMax;
  nuxtApp.vueApp.config.globalProperties.$api = useApi;
  
  // Return the composables for use in components
  return {
    provide: {
      viewport,
      toPairs: useToPairs,
      orderBy: useOrderBy,
      min: useMin,
      max: useMax,
      api: useApi
    }
  };
});
