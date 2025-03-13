<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, computed, watch } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'dark');

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  legendPosition: {
    type: String,
    default: 'bottom'
  }
});

const seriesProps = computed(() => {
  switch (props.legendPosition) {
    case 'right':
      return {
        radius: '55%',
        center: ['25%', '50%'],
      }
    case 'bottom':
      return {
        radius: '65%',
        center: ['50%', '30%'],
      }
  }
});

const legendProps = computed(() => {
  switch (props.legendPosition) {
    case 'right':
      return { 
        orient: 'vertical',
        height: '100%', 
        left: '40%', 
        top: '15%' 
      }
    case 'bottom':
      return {
        orient: 'vertical',
        height: '50%',
        top: '60%',
        left: 'left',
      }
  }
});

const option = ref({
  legend: {
    icon: 'square',
    type: 'scroll',
    textStyle: {
      color: '#E5E7EBFF',
    },
    ...legendProps.value,
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
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
});

watch(
  () => [props.data, props.name, props.legendPosition],
  () => {
    option.value = {
      legend: {
        icon: 'square',
        type: 'scroll',
        textStyle: {
          color: '#E5E7EBFF',
        },
        ...legendProps.value,
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
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
    };
  }
);
</script>

<style scoped>
.chart {
  height: 300px;
  width: 100%;
  min-height: 300px;
}
</style>
