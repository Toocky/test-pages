import { defineNuxtPlugin } from '#app'

// Only run on client-side
export default defineNuxtPlugin(async (nuxtApp) => {
  // Only import and register ECharts on client-side
  if (process.client) {
    // Use dynamic imports for client-side only
    const [
      { use },
      { CanvasRenderer },
      { BarChart, PieChart },
      { GridComponent, LegendComponent, TooltipComponent, TitleComponent },
      { LabelLayout },
      VueECharts,
    ] = await Promise.all([
      import('echarts/core'),
      import('echarts/renderers'),
      import('echarts/charts'),
      import('echarts/components'),
      import('echarts/features'),
      import('vue-echarts'),
    ])

    // Register ECharts components
    use([
      CanvasRenderer,
      BarChart,
      PieChart,
      GridComponent,
      LegendComponent,
      TooltipComponent,
      TitleComponent,
      LabelLayout,
    ])

    // Provide the theme key
    nuxtApp.vueApp.provide(VueECharts.THEME_KEY, 'light')

    // Register the component globally
    nuxtApp.vueApp.component('VChart', VueECharts.default)
  }
})
