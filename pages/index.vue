<script setup lang="ts">
import { differenceInHours, differenceInSeconds, sub, min } from 'date-fns'
import type { IModelAvailabilityRow, IStatusInfo } from '~/interfaces/model'
import { parseMilliseconds } from '~/utils/date'
import { addUSD, numberToMoney, formatLargeNumber } from '~/utils/formatters'
import { ref, computed, watch, onMounted } from 'vue'
import { useApi } from '~/composables/use-api'

// Only import and use echarts on client-side
if (process.client) {
  // Use dynamic imports for client-side only
  Promise.all([
    import('echarts/core'),
    import('echarts/renderers'),
    import('echarts/charts'),
    import('echarts/components'),
    import('echarts/features')
  ]).then(([
    { use },
    { CanvasRenderer },
    { BarChart, PieChart },
    { GridComponent, LegendComponent, TooltipComponent },
    { LabelLayout }
  ]) => {
    use([
      BarChart,
      CanvasRenderer,
      PieChart,
      GridComponent,
      LabelLayout,
      TooltipComponent,
      LegendComponent,
    ])
  })
}

// Define Model type since we don't have the generated types
type Model = {
  provider: string
  route: string
  model: string
  type: string
  query_count: string
  avg_cost: string | null
  input_cost: string | null
  output_cost: string | null
  max_tokens: number | null
  max_response_tokens: number | null
  latency: string
}

const PERIOD_DAYS = 30
const INTERVAL_HOURS = 8
const TOTAL_DOTS = 90 // 1 dot every 8 hours across 30 days
const modelsPerPage = 20

// Use composables directly
const viewport = useViewport()
const api = useApi()

const statRows = [
  {
    name: 'Language Models',
    type: 'llm',
  },
  {
    name: 'Voice Models',
    type: 'voice',
  },
  {
    name: 'Vision Models',
    type: 'vision',
  },
  {
    name: 'Moderation Models',
    type: 'moderation',
  },
  {
    name: 'Image Models',
    type: 'image',
  },
  {
    name: 'Embedding Models',
    type: 'embedding',
  },
  {
    name: 'Coding Models',
    type: 'code',
  },
  {
    name: 'Video Models',
    type: 'video',
  },
]
const tabItems = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'llm',
    label: 'Language',
  },
  {
    key: 'voice',
    label: 'Voice',
  },
  {
    key: 'image',
    label: 'Image',
  },
  {
    key: 'vision',
    label: 'Vision',
  },
  {
    key: 'embedding',
    label: 'Embedding',
  },
  {
    key: 'code',
    label: 'Coding',
  },
  {
    key: 'video',
    label: 'Video',
  },
]
const selectedTab = ref('all')
const loading = ref(true)

// Helper function for percentage calculation
const calculatePercentage = (value: number, total: number) => {
  if (total === 0) return 0
  return (value / total) * 100
}

// Use API data
const { data: modelsRef } = await api('models', {})
const models = computed<Map<string, Model>>(() => {
  const map = new Map()
  for (const model of modelsRef.value || []) {
    map.set(`${model.provider}_${model.route}`, model)
  }
  return map
})

const modelCounters = computed(() => {
  const byType = {
    llm: 0,
    voice: 0,
    vision: 0,
    moderation: 0,
    image: 0,
    embedding: 0,
    code: 0,
    video: 0,
  }
  let totalQueryCount = 0
  const byProvider: { [key: string]: number } = {}
  const byModel: { [key: string]: number } = {}
  for (const model of modelsRef.value || []) {
    byType[model.type]++
    if (selectedTab.value !== 'all' && model.type !== selectedTab.value) {
      continue
    }
    const queryCount = parseInt(model.query_count)
    totalQueryCount += queryCount
    if (!(model.provider in byProvider)) {
      byProvider[model.provider] = 0
    }
    byProvider[model.provider] += queryCount
    if (!(model.model in byModel)) {
      byModel[model.model] = 0
    }
    byModel[model.model] += queryCount
  }
  for (const [k, v] of Object.entries(byProvider)) {
    byProvider[k] = calculatePercentage(v, totalQueryCount)
  }
  for (const [k, v] of Object.entries(byModel)) {
    byModel[k] = calculatePercentage(v, totalQueryCount)
  }
  return { byType, byProvider, byModel }
})

const topProvidersData = computed(() => {
  return useOrderBy(
    useToPairs(modelCounters.value.byProvider),
    (item) => item[1],
    'desc',
  )
    .slice(0, 5)
    .map(([name, value]) => ({
      name: `${name} (${value.toFixed(0)}%)`,
      value,
    }))
})
const topModelsData = computed(() => {
  return useOrderBy(
    useToPairs(modelCounters.value.byModel),
    (item) => item[1],
    'desc',
  )
    .slice(0, 5)
    .map(([name, value]) => ({
      name: `${name} (${value.toFixed(0)}%)`,
      value,
    }))
})
const search = ref('')
const orderDirection = ref('desc')
const page = ref(1)
const groupedAvailability = ref(new Map())
const filteredGroupedAvailability = computed(() => {
  const searchValue = search.value ? search.value.toLowerCase() : ''
  return new Map(
    useOrderBy(
      Array.from(groupedAvailability.value.entries()).filter(
        ([model, modelsMap]) => {
          if (!searchValue) return true
          const modelMatches =
            typeof model === 'string' &&
            model.toLowerCase().includes(searchValue)
          const providerMatches = modelsMap.some((item) => {
            return (
              typeof item.provider === 'string' &&
              item.provider.toLowerCase().includes(searchValue)
            )
          })
          return modelMatches || providerMatches
        },
      ),
      [
        ([model, _]) => modelCounters.value.byModel[model] || 0,
        ([_, modelsMap]) => modelsMap[0].upTimePercentage || 0,
      ],
      ['desc', orderDirection.value],
    ),
  )
})

const paginatedGroupedAvailability = computed(() => {
  const entries = Array.from(filteredGroupedAvailability.value.entries())
  if (entries.length === 0) return new Map()

  // Let pagination component handle page boundaries
  const start = (page.value - 1) * modelsPerPage
  const end = Math.min(start + modelsPerPage, entries.length)

  return new Map(entries.slice(start, end))
})
const setGroupedAvailability = async (type) => {
  loading.value = true

  const { data: modelsAvailabilityRef } = await api('models/availability', {
    params: { type: type !== 'all' ? type : undefined, period: PERIOD_DAYS },
    server: false,
  })

  const nowDt = new Date()
  const firstDotDt = sub(nowDt, { days: PERIOD_DAYS })
  const maxTotalTracked = differenceInSeconds(nowDt, firstDotDt)
  const groupedRows = new Map()
  const bucketRanges = []
  for (let i = 0; i < 7; i++) {
    bucketRanges.push({ min: Infinity, max: -Infinity })
  }
  const modelGroups = {
    'mistral-large': ['mistral-large', 'large-latest'],
    'gemini-flash-1.5': ['gemini-flash-1.5', 'gemini-1.5-flash'],
    'gemini-pro-1.5': ['gemini-pro-1.5', 'gemini-1.5-pro'],
    'llama-2-13b-chat': ['llama-2-13b-chat', 'llama2-13b-chat'],
    'llama-2-7b-chat': ['llama-2-7b-chat', 'llama2-7b-chat'],
    'llama-3.1-405b-instruct-turbo': [
      'llama-3.1-405b-instruct-turbo',
      'llama3.1-405b-instruct-turbo',
    ],
    'llama-3.1-8b-instruct-turbo': [
      'llama-3.1-8b-instruct-turbo',
      'llama3.1-8b-instruct-turbo',
    ],
    'llama-3.1-lumimaid-70b': [
      'llama-3.1-lumimaid-70b',
      'llama3.1-lumimaid-70b',
    ],
    'llama-3.1-lumimaid-8b': ['llama-3.1-lumimaid-8b', 'llama3.1-lumimaid-8b'],
    'llama-3.1-nemotron-70b-instruct': [
      'llama-3.1-nemotron-70b-instruct',
      'llama3.1-nemotron-70b-instruct',
    ],
    'llama-3.2-11b-vision-instruct': [
      'llama-3.2-11b-vision-instruct',
      'llama3.2-11b-vision-instruct',
    ],
    'llama-3.2-1b-instruct': ['llama-3.2-1b-instruct', 'llama3.2-1b-instruct'],
    'llama-3.2-3b-instruct': ['llama-3.2-3b-instruct', 'llama3.2-3b-instruct'],
    'llama-3.2-3b-instruct-turbo': [
      'llama-3.2-3b-instruct-turbo',
      'llama3.2-3b-instruct-turbo',
    ],
    'llama-3.2-90b-vision-instruct': [
      'llama-3.2-90b-vision-instruct',
      'llama3.2-90b-vision-instruct',
    ],
    'llama-3.2-90b-vision-instruct-turbo': [
      'llama-3.2-90b-vision-instruct-turbo',
      'llama3.2-90b-vision-instruct-turbo',
    ],
    'llama-3.3-70b-instruct': [
      'llama-3.3-70b-instruct',
      'llama3.3-70b-instruct',
    ],
    'llama-3.3-70b-instruct-turbo': [
      'llama-3.3-70b-instruct-turbo',
      'llama3.3-70b-instruct-turbo',
    ],
    'llama-3-1-405b-instruct': [
      'llama-3-1-405b-instruct',
      'llama3-1-405b-instruct',
    ],
    'llama-3-1-70b-instruct': [
      'llama-3-1-70b-instruct',
      'llama3-1-70b-instruct',
    ],
    'llama-3-1-8b-instruct': ['llama-3-1-8b-instruct', 'llama3-1-8b-instruct'],
    'llama-3-70b': ['llama-3-70b', 'llama3-70b'],
    'llama-3-70b-chat': ['llama-3-70b-chat', 'llama3-70b-chat'],
    'llama-3-70b-instruct': ['llama-3-70b-instruct', 'llama3-70b-instruct'],
    'llama-3-70b-instruct-lite': [
      'llama-3-70b-instruct-lite',
      'llama3-70b-instruct-lite',
    ],
    'llama-3-70b-instruct-turbo': [
      'llama-3-70b-instruct-turbo',
      'llama3-70b-instruct-turbo',
    ],
    'llama-3-8b': ['llama-3-8b', 'llama3-8b'],
    'llama-3-8b-chat': ['llama-3-8b-chat', 'llama3-8b-chat'],
    'llama-3-8b-instruct': ['llama-3-8b-instruct', 'llama3-8b-instruct'],
    'llama-3-8b-instruct-lite': [
      'llama-3-8b-instruct-lite',
      'llama3-8b-instruct-lite',
    ],
    'llama-3-8b-instruct-turbo': [
      'llama-3-8b-instruct-turbo',
      'llama3-8b-instruct-turbo',
    ],
  }

  const partialKeywords = [
    'claude-3-haiku',
    'claude-3-sonnet',
    'claude-3-5-sonnet',
    'claude-1',
    'claude-instant-1',
    'claude-2',
    'mistral-7b-openorca',
    'claude-3',
    'claude-3-5',
    'claude-3-5-haiku',
    'claude-3-opus',
    'clip-vit-b',
    'clip-vit-large',
    'codellama-13b-instruct',
    'CodeLlama-34b-Instruct',
    'CodeLlama-70b-Instruct',
    'codestral',
    'command',
    'command-light',
    'command-r',
    'command-r-plus',
    'embed-english-light-v2.0',
    'embed-english-light-v3.0',
    'embed-english-v2.0',
    'embed-english-v3',
    'embed-multilingual-v2.0',
    'embed-multilingual-v3.0',
    'gemini-flash',
    'gemini-flash-8b',
    'gemini-pro',
    'gemini-pro-8k',
    'gemini-pro-vision',
    'gemma-2-27b',
    'gemma-2-9b',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-instruct',
    'gpt-4',
    'gpt-4o',
    'gpt-4o-mini',
    'gpt-4-turbo',
    'jamba-1-5-large',
    'jamba-1-5-mini',
    'jamba-instruct',
    'nous-hermes-2-mixtral-8x7b',
    'llama-guard-2-8b',
    'llama-guard-3-11B-vision-turbo',
    'Llama-Guard-3-8B',
    'Llama-Rank',
    'mistral-7b-instruct',
    'mistral-nemo',
    'mistral-small',
    'mistral-tiny',
    'mixtral-8x22B',
    'mixtral-8x22b-instruct',
    'mixtral-8x7b',
    'mixtral-8x7b-instruct',
    'mythomax-l2-13b',
    'o1',
    'o1-mini',
    'o1-mini',
    'o1-preview',
    'stable-diffusion-2-1',
    'stable-diffusion-v1-5',
    'stable-diffusion-v2',
    'stable-diffusion-xl',
    'text-embedding-ada-002',
    'mistral-large',
    'large-latest',
    'gemini-flash-1.5',
    'gemini-1.5-flash',
    'gemini-pro-1.5',
    'gemini-1.5-pro',
    'llama-2-13b-chat',
    'llama2-13b-chat',
    'llama-2-7b-chat',
    'llama2-7b-chat',
    'llama-3.1-405b-instruct-turbo',
    'llama3.1-405b-instruct-turbo',
    'llama-3.1-8b-instruct-turbo',
    'llama3.1-8b-instruct-turbo',
    'llama-3.1-lumimaid-70b',
    'llama3.1-lumimaid-70b',
    'llama-3.1-lumimaid-8b',
    'llama3.1-lumimaid-8b',
    'llama-3.1-nemotron-70b-instruct',
    'llama3.1-nemotron-70b-instruct',
    'llama-3.2-11b-vision-instruct',
    'llama3.2-11b-vision-instruct',
    'llama-3.2-1b-instruct',
    'llama3.2-1b-instruct',
    'llama-3.2-3b-instruct',
    'llama3.2-3b-instruct',
    'llama-3.2-3b-instruct-turbo',
    'llama3.2-3b-instruct-turbo',
    'llama-3.2-90b-vision-instruct',
    'llama3.2-90b-vision-instruct',
    'llama-3.2-90b-vision-instruct-turbo',
    'llama3.2-90b-vision-instruct-turbo',
    'llama-3.3-70b-instruct',
    'llama3.3-70b-instruct',
    'llama-3.3-70b-instruct-turbo',
    'llama3.3-70b-instruct-turbo',
    'llama-3-1-405b-instruct',
    'llama3-1-405b-instruct',
    'llama-3-1-70b-instruct',
    'llama3-1-70b-instruct',
    'llama-3-1-8b-instruct',
    'llama3-1-8b-instruct',
    'llama-3-70b',
    'llama3-70b',
    'llama-3-70b-chat',
    'llama3-70b-chat',
    'llama-3-70b-instruct',
    'llama3-70b-instruct',
    'llama-3-70b-instruct-lite',
    'llama3-70b-instruct-lite',
    'llama-3-70b-instruct-turbo',
    'llama3-70b-instruct-turbo',
    'llama-3-8b',
    'llama3-8b',
    'llama-3-8b-chat',
    'llama3-8b-chat',
    'llama-3-8b-instruct',
    'llama3-8b-instruct',
    'llama-3-8b-instruct-lite',
    'llama3-8b-instruct-lite',
    'llama-3-8b-instruct-turbo',
    'llama3-8b-instruct-turbo',
  ]
    .map((keyword) => keyword.toLowerCase())
    .sort((a, b) => b.length - a.length)

  const lowercaseModelGroups = Object.entries(modelGroups).reduce(
    (acc, [group, models]) => {
      acc[group.toLowerCase()] = models.map((model) => model.toLowerCase())
      return acc
    },
    {},
  )
  const sortedModelGroups = Object.entries(lowercaseModelGroups).sort(
    ([groupA], [groupB]) => groupB.length - groupA.length,
  )

  for (const row of modelsAvailabilityRef.value || []) {
    const modelName = row.model.toLowerCase()
    const providerModelKey = `${row.provider}_${row.model}`
    let groupKey = modelName
    const matchedKeyword = partialKeywords.find((keyword) =>
      groupKey.includes(keyword),
    )
    if (matchedKeyword) {
      groupKey = matchedKeyword
    }
    const matchedGroup = sortedModelGroups.find(([_, models]) =>
      models.some((model) => model === groupKey || groupKey.includes(model)),
    )
    if (matchedGroup) {
      const groupName = matchedGroup[0] // Keep original casing
      const matchedVariant = matchedGroup[1].find((variant) =>
        modelName.includes(variant.toLowerCase()),
      )

      if (matchedVariant) {
        const variantLower = matchedVariant.toLowerCase()
        const modelLower = row.model.toLowerCase()
        const matchIndex = modelLower.indexOf(variantLower)

        if (matchIndex !== -1) {
          // Split into parts based on where the variant matches
          const prefix = matchIndex > 0 ? row.model.slice(0, matchIndex) : ''
          const suffix =
            matchIndex + variantLower.length < row.model.length
              ? row.model.slice(matchIndex + variantLower.length)
              : ''

          // Reconstruct with standardized group name
          row.model = prefix + groupName + suffix
        }
      }

      groupKey = groupName.toLowerCase()
    }
    if (!groupedRows.has(groupKey)) {
      groupedRows.set(groupKey, new Map())
    }
    const modelRows = groupedRows.get(groupKey)
    const lastPreviousStatusDt = new Date(
      row.last_previous_status_dt || row.created_dt,
    )

    if (!modelRows.has(providerModelKey)) {
      const model = models.value.get(`${row.provider}_${row.route}`)
      if (!model) {
        console.log(
          `Model ${row.provider}/${row.route} is not presented in models!`,
        )
        continue
      }
      let createdDt = new Date(row.created_dt)
      createdDt = min([createdDt, lastPreviousStatusDt])
      const createdDiff = differenceInHours(createdDt, firstDotDt)
      const lastStatusDiff = differenceInHours(lastPreviousStatusDt, firstDotDt)
      let nullDots
      let statusDots = 0
      if (createdDiff > 0) {
        nullDots = Math.floor(createdDiff / INTERVAL_HOURS)
      } else {
        nullDots = 0
      }
      if (lastStatusDiff > 0) {
        statusDots = Math.floor(lastStatusDiff / INTERVAL_HOURS)
      } else {
        statusDots = TOTAL_DOTS
        nullDots = 0
      }
      if (nullDots + statusDots > TOTAL_DOTS) {
        nullDots = TOTAL_DOTS - statusDots
      } else if (nullDots + statusDots < TOTAL_DOTS) {
        statusDots = statusDots + (TOTAL_DOTS - nullDots)
      }
      const states = [
        ...Array(nullDots).fill(null),
        ...Array(statusDots).fill(
          row.last_previous_status === 'AVAILABLE'
            ? 100
            : row.last_previous_status === 'UNAVAILABLE'
              ? 0
              : null,
        ),
      ]
      let [totalTracked, upTime, upTimePercentage, lastStatus] = [
        0,
        null,
        null,
        undefined,
      ]
      if (row.last_previous_status_dt && row.last_previous_status) {
        totalTracked = useMin([
          differenceInSeconds(nowDt, lastPreviousStatusDt),
          maxTotalTracked,
        ])
        if (row.last_previous_status === 'AVAILABLE') {
          upTime = totalTracked
          upTimePercentage = (upTime / totalTracked) * 100
        } else {
          upTime = 0
          upTimePercentage = 0
        }
        lastStatus = {
          dt: lastPreviousStatusDt,
          status: row.last_previous_status,
        }
      }

      const latencies = []
      const latenciesFormatted = []
      const latenciesRating = []
      model.latency.split('/').forEach((val, i) => {
        const parsedVal = parseFloat(val)
        if (Number.isNaN(parsedVal)) {
          latencies.push(null)
          latenciesFormatted.push('n/a')
          return
        }
        latencies.push(parsedVal)
        if (parsedVal < bucketRanges[i].min) bucketRanges[i].min = parsedVal
        if (parsedVal > bucketRanges[i].max) bucketRanges[i].max = parsedVal
        const parsedLatency = parseMilliseconds(parsedVal)
        const latencyStr = []
        if (parsedLatency.minutes) {
          latencyStr.push(`${parsedLatency.minutes}m`)
        }
        if (parsedLatency.seconds && !parsedLatency.minutes) {
          latencyStr.push(`${parsedLatency.seconds}s`)
        }
        if (parsedLatency.milliseconds && !parsedLatency.seconds) {
          latencyStr.push(`${parsedLatency.milliseconds}ms`)
        }
        latenciesFormatted.push(latencyStr.join(''))
      })

      modelRows.set(providerModelKey, {
        model: row.model,
        provider: row.provider,
        type: model.type,
        avgCost: model.avg_cost ?? null,
        inputCost: model.input_cost ?? null,
        outputCost: model.output_cost ?? null,
        maxTokens: model.max_tokens ?? null,
        maxResponseTokens: model.max_response_tokens ?? null,
        latencies,
        latenciesFormatted,
        latenciesRating,
        states,
        isExpanded: false,
        totalTracked,
        upTime,
        upTimePercentage,
        lastStatus,
      })
    }
    if (!row.status || !row.status_dt) {
      continue
    }
    const groupedRow = modelRows.get(providerModelKey)
    const statusDt = new Date(row.status_dt)
    const secondsSinceStatus = useMin([
      differenceInSeconds(nowDt, statusDt),
      maxTotalTracked,
    ])
    let upTime = groupedRow.upTime || 0
    if (groupedRow.lastStatus && groupedRow.lastStatus.status !== row.status) {
      if (row.status === 'UNAVAILABLE') {
        upTime -= secondsSinceStatus
      } else if (row.status === 'AVAILABLE') {
        upTime += secondsSinceStatus
      }
    } else if (!groupedRow.lastStatus) {
      groupedRow.totalTracked = useMax([
        differenceInSeconds(nowDt, statusDt),
        groupedRow.totalTracked,
      ])
      if (row.status === 'AVAILABLE') {
        upTime = groupedRow.totalTracked
      }
    }
    groupedRow.lastStatus = { dt: statusDt, status: row.status }
    groupedRow.upTime = upTime
    groupedRow.upTimePercentage = (upTime / groupedRow.totalTracked) * 100
    const statusDots =
      Math.floor(differenceInHours(nowDt, statusDt) / INTERVAL_HOURS) + 1
    const i = TOTAL_DOTS - statusDots
    const stateNum = row.status === 'AVAILABLE' ? 100 : 0
    const transitionState = groupedRow.states[i]
    let transitionStateNum = stateNum
    if (transitionState !== null) {
      transitionStateNum = 50
    }
    groupedRow.states = [
      ...(i > 0 ? groupedRow.states.slice(0, i - 1) : []),
      transitionStateNum,
      ...Array(statusDots).fill(stateNum),
    ]
  }
  groupedAvailability.value = new Map(
    Array.from(groupedRows)
      .filter(([_, modelsMap]) => modelsMap.size > 0)
      .map(([model, modelsMap]) => [
        model,
        useOrderBy(
          Array.from(modelsMap.values()).map((groupedRow) => {
            groupedRow.latenciesRating = groupedRow.latencies.map(
              (latency, index) => {
                if (latency === null) return 0
                if (bucketRanges[index].min === bucketRanges[index].max)
                  return 100
                return (
                  100 -
                  ((latency - bucketRanges[index].min) /
                    (bucketRanges[index].max - bucketRanges[index].min)) *
                    100
                )
              },
            )
            return groupedRow
          }),
          ({ upTimePercentage }) => upTimePercentage || 0,
          'desc',
        ),
      ]),
  )
  loading.value = false
}

const triggerMailTo = () => {
  window.location =
    'mailto:support@neuronicai.com?subject=Please add my aggregator to APIpie, here are the details'
}

watch(selectedTab, async (newValue) => {
  await setGroupedAvailability(newValue)
})

watch(search, () => {
  page.value = 1
})

onMounted(async () => {
  await Promise.resolve()
  await setGroupedAvailability()
})
</script>

<template>
  <div class="flex flex-col gap-5 w-full">
    <div class="flex flex-col gap-4 md:flex-row md:gap-0 justify-between">
      <div class="text-2xl md:text-3xl font-semibold">Global AI Overview</div>
      <div>
        <u-button color="gray" variant="solid" @click="triggerMailTo">
          <u-icon name="i-heroicons-outline-plus" />
          Add Your Aggregator
        </u-button>
      </div>
    </div>
    <div class="grid gap grid-cols-1 xl:grid-cols-2 gap-5">
      <u-card
        class="md:h-[192px] xl:h-[368px]"
        :ui="{ body: { base: 'h-full' } }"
      >
        <div class="flex flex-col md:flex-row gap-5 md:h-full">
          <charts-pie
            class="h-[190px] md:h-full"
            name="Top Providers"
            :data="topProvidersData"
            :legend-position="
              viewport.isGreaterOrEquals('xl') ? 'bottom' : 'right'
            "
          ></charts-pie>
          <div
            class="md:rotate-180 h-0.5 md:h-0 w-full md:w-[4px] dark:bg-gray-700"
          ></div>
          <charts-pie
            class="h-[190px] md:h-full"
            name="Top Models"
            :data="topModelsData"
            :legend-position="
              viewport.isGreaterOrEquals('xl') ? 'bottom' : 'right'
            "
          ></charts-pie>
        </div>
      </u-card>
      <u-card class="md:h-[192px] xl:h-[368px]">
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-4">
          <template v-for="(row, i) of statRows">
            <div class="flex flex-col gap-0.5">
              <div class="text-slate-400 text-sm font-medium">
                {{ row.name }}
              </div>
              <div class="text-2xl md:text-3xl font-semibold">
                {{ modelCounters.byType[row.type] }}
              </div>
            </div>
            <template
              v-if="
                viewport.isGreaterOrEquals('xl') || viewport.isLessThan('md')
              "
            >
              <div
                v-if="(i + 1) % 2 === 0 && i < statRows.length - 1"
                class="col-span-2 h-0px border dark:border-slate-700"
              ></div>
            </template>
            <template v-else>
              <div
                v-if="(i + 1) % 4 === 0 && i < statRows.length - 1"
                class="col-span-4 h-0px border dark:border-gray-700"
              ></div>
            </template>
          </template>
        </div>
      </u-card>
      <u-card class="xl:col-span-2">
        <div class="flex flex-col gap-5">
          <u-progress v-if="loading" animation="carousel"></u-progress>
          <div class="text-sm font-semibold">Availability last 30 days</div>
          <div class="flex flex-col gap-4 md:flex-row justify-between">
            <u-select-menu
              v-model="selectedTab"
              color="gray"
              class="w-full md:w-96"
              size="lg"
              :options="tabItems"
              value-attribute="key"
              option-attribute="label"
            ></u-select-menu>
            <div class="flex justify-between gap-4">
              <u-button
                v-if="orderDirection === 'asc'"
                icon="i-heroicons-bars-arrow-up"
                size="lg"
                color="gray"
                variant="solid"
                square
                @click="orderDirection = 'desc'"
              ></u-button>
              <u-button
                v-else
                icon="i-heroicons-bars-arrow-down"
                size="lg"
                color="gray"
                variant="solid"
                square
                @click="orderDirection = 'asc'"
              ></u-button>
              <u-input
                v-model="search"
                class="w-full md:w-auto"
                icon="i-heroicons-magnifying-glass-20-solid"
                size="lg"
                color="gray"
                :trailing="false"
                placeholder="Search..."
              />
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <template
              v-for="[groupKey, rows] in paginatedGroupedAvailability.entries()"
            >
              <model-availability-card
                :model="{ ...rows[0], model: rows[0].model }"
                :group-key="groupKey"
              >
                <div class="h-[0px] border border-gray-700"></div>
                <div v-auto-animate class="flex flex-col gap-2">
                  <model-availability-card
                    v-if="rows[0].isExpanded"
                    v-for="row in rows.slice(1)"
                    :model="{ ...row, model: row.model }"
                    :group-key="groupKey"
                    secondary
                  />
                </div>
                <div class="flex justify-between">
                  <div></div>
                  <u-button
                    v-if="rows.length > 1"
                    size="2xs"
                    :icon="
                      rows[0].isExpanded
                        ? 'i-heroicons-chevron-up'
                        : 'i-heroicons-chevron-down'
                    "
                    color="white"
                    variant="solid"
                    trailing
                    @click="rows[0].isExpanded = !rows[0].isExpanded"
                  >
                    {{ rows[0].isExpanded ? 'Collapse' : 'Expand' }}
                  </u-button>
                </div>
              </model-availability-card>
            </template>
            <u-pagination
              v-model="page"
              :page-count="modelsPerPage"
              :total="filteredGroupedAvailability.size"
            ></u-pagination>
          </div>
        </div>
      </u-card>
    </div>
  </div>
</template>
