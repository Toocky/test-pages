import { defineNuxtPlugin } from '#app';
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { LabelLayout } from 'echarts/features';

// Register ECharts components
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  LabelLayout
]);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally
  nuxtApp.vueApp.component('VChart', ECharts);
});
