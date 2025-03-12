<script setup lang="ts">
import type { IModelAvailabilityRow } from '~/interfaces/model';
import { addUSD, numberToMoney, formatLargeNumber } from '~/utils/formatters';

const props = defineProps<{
  model: IModelAvailabilityRow;
  secondary?: boolean;
  groupKey?: string;
}>();

const modelNameParts = computed(() => {
  if (!props.groupKey || !props.model.model) return { before: '', match: props.model.model, after: '' };
  
  const modelName = props.model.model.toLowerCase();
  const groupKey = props.groupKey.toLowerCase();
  const index = modelName.indexOf(groupKey);
  
  if (index === -1) return { before: '', match: props.model.model, after: '' };
  
  return {
    before: props.model.model.slice(0, index),
    match: props.model.model.slice(index, index + props.groupKey.length),
    after: props.model.model.slice(index + props.groupKey.length)
  };
});
const viewport = useViewport();

const iconColor = computed(() => {
  if (props.model.lastStatus) {
    if (props.model.lastStatus.status === 'AVAILABLE') {
      return 'bg-emerald-500';
    }
    return 'bg-red-500';
  } else {
    return 'bg-gray-700';
  }
});

const badgeColor = computed(() => {
  const upTimePercentage = props.model.upTimePercentage;
  if (upTimePercentage !== null) {
    if (upTimePercentage >= 80) {
      return 'emerald';
    } else if (upTimePercentage >= 50) {
      return 'amber';
    }
    return 'red';
  }
  return '';
});

const latencyBuckets = computed(() => [
  { label: 'TtFC', index: 6 },
  { label: '2k', index: 0 },
  { label: '4k', index: 1 },
  { label: '8k', index: 2 },
  { label: '16k', index: 3 },
  { label: '32k', index: 4 },
]);

const shouldShowInputOutputCost = computed(() => {
  return props.model.inputCost != null && props.model.outputCost != null;
});
</script>

<template>
  <u-card
    :class="!secondary ? 'border border-gray-700 rounded-md' : ''"
    :ui="{ background: secondary ? 'bg-white dark:bg-gray-900' : '' }"
  >
    <div class="flex flex-col gap-5">
      <div class="flex justify-between">
        <div class="flex flex-col md:flex-row gap-4 md:gap-3">
          <div>
            <u-badge
              v-if="model.upTimePercentage !== null"
              size="lg"
              variant="subtle"
              :ui="{
                variant: {
                  subtle: `bg-${badgeColor}-50 dark:bg-${badgeColor}-400 dark:bg-opacity-10 text-${badgeColor}-500 dark:text-${badgeColor}-400 ring-1 ring-inset ring-${badgeColor}-500 dark:ring-${badgeColor}-400 ring-opacity-25 dark:ring-opacity-25`,
                },
              }"
            >
              {{ model.upTimePercentage.toFixed(2) }}%
            </u-badge>
          </div>
          <div class="flex gap-1 md:justify-center md:items-center">
            <u-icon class="h-6 w-6" :class="iconColor" name="i-heroicons-check-circle"></u-icon>
            <span class="text-lg">
              <span v-if="modelNameParts.before" class="text-slate-500 font-medium">{{ modelNameParts.before }}</span>
              <span class="font-semibold">{{ modelNameParts.match }}</span>
              <span v-if="modelNameParts.after" class="text-slate-500 font-medium">{{ modelNameParts.after }}</span>
            </span>
            <span class="text-lg font-medium">({{ model.provider }})</span>
          </div>
        </div>
        <div v-if="viewport.isGreaterOrEquals('xl')" class="flex gap-3">
          <u-badge v-if="shouldShowInputOutputCost" size="lg" color="gray" variant="solid">
            <span class="text-slate-400 text-sm font-medium">Input:</span>
              <span class="text-sm font-semibold">{{ addUSD(numberToMoney(props.model.inputCost, 2)) }}</span>
              <span class="text-slate-400 text-sm font-medium">/M</span>
          </u-badge>
          <u-badge v-if="shouldShowInputOutputCost" size="lg" color="gray" variant="solid">
            <span class="text-slate-400 text-sm font-medium">Output:</span>
              <span class="text-sm font-semibold">{{ addUSD(numberToMoney(props.model.outputCost, 2)) }}</span>
              <span class="text-slate-400 text-sm font-medium">/M</span>
          </u-badge>
          <u-badge v-else-if="props.model.avgCost" size="lg" color="gray" variant="solid">
            <div class="flex justify-center items-center gap-1.5">
              <span class="text-sm font-semibold">
                {{ addUSD(numberToMoney(props.model.avgCost, 5)) }}
              </span>
              <span class="text-slate-400 text-sm font-medium">
                {{ ['image', 'embedding'].includes(props.model.type) ? 'avg' : '1000/char' }}
              </span>
            </div>
          </u-badge>
        </div>
      </div>
      <div class="flex justify-between">
        <div
          v-for="state in model.states"
          :class="{
            'md:w-[3px]': true,
            'w-[1px]': true,
            'xl:w-1.5': true,
            'h-1.5': true,
            'bg-emerald-500': state === 100,
            'bg-red-500': state === 0,
            'bg-gray-700': state === null,
            'bg-amber-500': state !== null && state > 0 && state < 100,
            'rounded-md': true,
          }"
        ></div>
      </div>
      <div class="flex gap-4 flex-col xl:flex-row xl:justify-between">
        <div v-if="viewport.isGreaterOrEquals('md')" class="flex gap-3 flex-wrap">
          <template v-for="bucket in latencyBuckets" :key="bucket.label">
            <u-badge v-if="props.model.latenciesFormatted.length > bucket.index" size="lg" color="gray" variant="solid">
              <div class="flex justify-center items-center gap-1.5">
                <div
                  class="w-2 h-2 rounded-md"
                  :class="{
                    'bg-emerald-500': props.model.latenciesRating[bucket.index] >= 80,
                    'bg-amber-500': props.model.latenciesRating[bucket.index] >= 30 && props.model.latenciesRating[bucket.index] < 80,
                    'bg-red-500': props.model.latencies[bucket.index] !== null && props.model.latenciesRating[bucket.index] < 30,
                    'bg-gray-700': props.model.latencies[bucket.index] === null,
                  }"
                ></div>
                <span class="text-slate-400 text-sm font-medium">{{ bucket.label }}</span>
                <span class="text-sm font-semibold">{{ props.model.latenciesFormatted[bucket.index] }}</span>
              </div>
            </u-badge>
          </template>
        </div>
        <div class="flex gap-3 flex-wrap">
          <u-badge
            v-if="props.model.maxTokens && viewport.isGreaterOrEquals('md')"
            size="lg"
            color="gray"
            variant="solid"
          >
            <div class="flex justify-center items-center gap-1.5">
              <span class="text-sm font-semibold">{{ formatLargeNumber(props.model.maxTokens) }}</span>
              <span class="text-slate-400 text-sm font-medium">MaxTokens</span>
            </div>
          </u-badge>
          <u-badge
            v-if="props.model.maxResponseTokens && viewport.isGreaterOrEquals('md')"
            size="lg"
            color="gray"
            variant="solid"
          >
            <div class="flex justify-center items-center gap-1.5">
              <span class="text-sm font-semibold">
                {{ formatLargeNumber(props.model.maxResponseTokens) }}
              </span>
              <span class="text-slate-400 text-sm font-medium">MaxResponse</span>
            </div>
          </u-badge>
          <template v-if="viewport.isLessThan('xl')">
            <u-badge v-if="shouldShowInputOutputCost" size="lg" color="gray" variant="solid">
              <span class="text-slate-400 text-sm font-medium">Input:</span>
              <span class="text-sm font-semibold">{{ addUSD(numberToMoney(props.model.inputCost, 2)) }}</span>
              <span class="text-slate-400 text-sm font-medium">/M</span>
            </u-badge>
            <u-badge v-if="shouldShowInputOutputCost" size="lg" color="gray" variant="solid">
              <span class="text-slate-400 text-sm font-medium">Output:</span>
              <span class="text-sm font-semibold">{{ addUSD(numberToMoney(props.model.outputCost, 2)) }}</span>
              <span class="text-slate-400 text-sm font-medium">/M</span>
            </u-badge>
            <u-badge v-else-if="props.model.avgCost" size="lg" color="gray" variant="solid">
              <div class="flex justify-center items-center gap-1.5">
                <span class="text-sm font-semibold">
                  {{ addUSD(numberToMoney(props.model.avgCost, 5)) }}
                </span>
                <span class="text-slate-400 text-sm font-medium">1000/char</span>
              </div>
            </u-badge>
          </template>
        </div>
      </div>
      <slot />
    </div>
  </u-card>
</template>
