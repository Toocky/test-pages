import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally
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
    
    // Register the component globally
    nuxtApp.vueApp.component('VChart', VChart)
  }
})
