import { defineNuxtPlugin } from '#app'
import { use } from 'echarts/core'
import { SvgRenderer } from 'echarts/renderers'
import { BarChart, PieChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components'
import { LabelLayout } from 'echarts/features'
import VChart from 'vue-echarts'

// Register ECharts components
use([
  SvgRenderer,
  BarChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  LabelLayout,
])

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally
  nuxtApp.vueApp.component('VChart', VChart)
})
