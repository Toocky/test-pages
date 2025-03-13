import { defineNuxtPlugin } from '#app'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components'
import { LabelLayout } from 'echarts/features'
import VChart, { THEME_KEY } from 'vue-echarts'

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

export default defineNuxtPlugin((nuxtApp) => {
  // Provide the theme key
  nuxtApp.vueApp.provide(THEME_KEY, 'light')
  
  // Register the component globally
  nuxtApp.vueApp.component('VChart', VChart)
})
