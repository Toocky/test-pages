<script setup lang="ts">
import type { PieSeriesOption } from 'echarts/charts'
import type { ComposeOption } from 'echarts/core'
import type {
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import { ref, computed, watch, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'

// Provide the theme key
provide(THEME_KEY, 'dark')

type PieOption = ComposeOption<
  | GridComponentOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
>

const chartRef = ref(null)
const props = withDefaults(
  defineProps<{
    name: string
    data: { name: string; value: number | string }[]
    legendPosition: 'bottom' | 'right'
  }>(),
  { legendPosition: 'bottom' },
)
const seriesProps = computed(() => {
  switch (props.legendPosition) {
    case 'right':
      return {
        radius: ['55%', '50%'],
        center: ['25%', '50%'],
      }
    case 'bottom':
      return {
        radius: ['65%', '70%'],
        center: ['50%', '30%'],
      }
  }
})
const legendProps = computed(() => {
  switch (props.legendPosition) {
    case 'right':
      return { height: '100%', left: '40%', top: '15%' }
    case 'bottom':
      return {
        height: '50%',
        top: '60%',
        left: 'left',
      }
  }
})

const buildOption = (): PieOption => {
  return {
    legend: {
      icon: 'square',
      orient: 'vertical',
      type: 'scroll',
      textStyle: {
        color: '#E5E7EBFF',
      },
      ...legendProps.value,
    },
    series: [
      {
        name: props.name,
        type: 'pie',
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: () => props.name,
          position: 'center',
          color: '#94A3B8',
          fontSize: '12px',
        },
        labelLine: {
          show: false,
        },
        data: props.data,
        ...seriesProps.value,
      },
    ],
  }
}

const option = ref<PieOption>(buildOption())

watch(
  () => [props.data, props.name, props.legendPosition],
  () => {
    option.value = buildOption()
  },
)
</script>

<template>
  <v-chart class="chart" ref="chartRef" :option="option" autoresize />
</template>

<style scoped>
.chart {
  height: 300px;
  width: 100%;
  min-height: 300px;
}
</style>
