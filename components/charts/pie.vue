<script setup lang="ts">
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

const buildOption = (): ECOption => {
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
const initOptions = computed<InitOptions>(() => ({
  height: 300,
  width: 300,
}))
provide(INIT_OPTIONS_KEY, initOptions)

const option = ref<ECOption>(buildOption())

watch(
  () => [props.data, props.name, props.legendPosition],
  () => {
    option.value = buildOption()
  },
)
</script>

<template>
  <VChartLight class="chart" ref="chartRef" :option="option" autoresize />
</template>

<!-- <style scoped>
.chart {
  height: 300px;
  width: 100%;
  min-height: 300px;
}
</style> -->
