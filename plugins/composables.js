import { defineNuxtPlugin } from '#app'
import { useViewport } from '~/composables/use-viewport'
import {
  useToPairs,
  useOrderBy,
  useMin,
  useMax,
} from '~/composables/use-lodash'
import { useApi } from '~/composables/use-api'

export default defineNuxtPlugin((nuxtApp) => {
  // Create a shared viewport instance
  const viewport = useViewport()

  // Make composables available globally via provide/inject
  nuxtApp.provide('viewport', viewport)
  nuxtApp.provide('toPairs', useToPairs)
  nuxtApp.provide('orderBy', useOrderBy)
  nuxtApp.provide('min', useMin)
  nuxtApp.provide('max', useMax)
  nuxtApp.provide('api', useApi)

  // Skip adding to globalProperties since it's causing issues
  // Just return the composables for use in components
  return {
    provide: {
      viewport,
      toPairs: useToPairs,
      orderBy: useOrderBy,
      min: useMin,
      max: useMax,
      api: useApi,
    },
  }
})
