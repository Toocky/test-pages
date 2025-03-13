import { defineNuxtPlugin } from '#app'

// Only run on client-side
export default defineNuxtPlugin((nuxtApp) => {
  // Only import and register ECharts on client-side
  if (process.client) {
    const { use } = require('echarts/core')
    const { CanvasRenderer } = require('echarts/renderers')
    const { BarChart, PieChart } = require('echarts/charts')
    const {
      GridComponent,
      LegendComponent,
      TooltipComponent,
      TitleComponent,
    } = require('echarts/components')
    const { LabelLayout } = require('echarts/features')
    const VChart = require('vue-echarts').default
    const { THEME_KEY } = require('vue-echarts')

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
    nuxtApp.vueApp.provide(THEME_KEY, 'light')
    
    // Register the component globally
    nuxtApp.vueApp.component('VChart', VChart)
  }
})
