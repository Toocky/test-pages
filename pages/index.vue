<script setup lang="ts">
import { differenceInHours, differenceInSeconds, sub, min } from 'date-fns'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components'
import { LabelLayout } from 'echarts/features'
import type { IModelAvailabilityRow, IStatusInfo } from '~/interfaces/model'
import { parseMilliseconds } from '~/utils/date'
import { addUSD, numberToMoney, formatLargeNumber } from '~/utils/formatters'
import { ref, computed, watch, onMounted } from 'vue'
import { useApi } from '~/composables/use-api'

use([
  BarChart,
  CanvasRenderer,
  PieChart,
  GridComponent,
  LabelLayout,
  TooltipComponent,
  LegendComponent,
])

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
const { toPairs, orderBy, min: minValue, max: maxValue } = useLodash()

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

// Mock data for development
const mockModels = ref([
  {
    provider: 'openai',
    route: 'gpt-4',
    model: 'gpt-4',
    type: 'llm',
    query_count: '1000',
    avg_cost: '0.01',
    input_cost: '0.005',
    output_cost: '0.015',
    max_tokens: 8192,
    max_response_tokens: 4096,
    latency: '1000/2000/3000',
  },
  {
    provider: 'anthropic',
    route: 'claude-3',
    model: 'claude-3',
    type: 'llm',
    query_count: '800',
    avg_cost: '0.008',
    input_cost: '0.004',
    output_cost: '0.012',
    max_tokens: 100000,
    max_response_tokens: 4096,
    latency: '1200/2200/3200',
  },
  {
    provider: 'google',
    route: 'gemini-pro',
    model: 'gemini-pro',
    type: 'llm',
    query_count: '1200',
    avg_cost: '0.007',
    input_cost: '0.0035',
    output_cost: '0.0105',
    max_tokens: 32768,
    max_response_tokens: 8192,
    latency: '900/1900/2900',
  },
  {
    provider: 'mistral',
    route: 'mistral-large',
    model: 'mistral-large',
    type: 'llm',
    query_count: '600',
    avg_cost: '0.006',
    input_cost: '0.003',
    output_cost: '0.009',
    max_tokens: 32768,
    max_response_tokens: 8192,
    latency: '800/1800/2800',
  },
  {
    provider: 'openai',
    route: 'dall-e-3',
    model: 'dall-e-3',
    type: 'image',
    query_count: '500',
    avg_cost: '0.02',
    input_cost: '0.01',
    output_cost: '0.03',
    max_tokens: null,
    max_response_tokens: null,
    latency: '2000/3000/4000',
  },
  {
    provider: 'openai',
    route: 'whisper',
    model: 'whisper',
    type: 'voice',
    query_count: '300',
    avg_cost: '0.006',
    input_cost: '0.003',
    output_cost: '0.009',
    max_tokens: null,
    max_response_tokens: null,
    latency: '1500/2500/3500',
  },
  {
    provider: 'openai',
    route: 'text-embedding-ada-002',
    model: 'text-embedding-ada-002',
    type: 'embedding',
    query_count: '2000',
    avg_cost: '0.0001',
    input_cost: '0.0001',
    output_cost: '0',
    max_tokens: 8191,
    max_response_tokens: null,
    latency: '500/1000/1500',
  },
  {
    provider: 'anthropic',
    route: 'claude-3-vision',
    model: 'claude-3-vision',
    type: 'vision',
    query_count: '400',
    avg_cost: '0.015',
    input_cost: '0.0075',
    output_cost: '0.0225',
    max_tokens: 100000,
    max_response_tokens: 4096,
    latency: '1800/2800/3800',
  },
])

// Mock availability data
const mockAvailability = ref([
  {
    provider: 'openai',
    route: 'gpt-4',
    model: 'gpt-4',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'anthropic',
    route: 'claude-3',
    model: 'claude-3',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'google',
    route: 'gemini-pro',
    model: 'gemini-pro',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'mistral',
    route: 'mistral-large',
    model: 'mistral-large',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'openai',
    route: 'dall-e-3',
    model: 'dall-e-3',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'openai',
    route: 'whisper',
    model: 'whisper',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'openai',
    route: 'text-embedding-ada-002',
    model: 'text-embedding-ada-002',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
  {
    provider: 'anthropic',
    route: 'claude-3-vision',
    model: 'claude-3-vision',
    created_dt: '2023-01-01T00:00:00Z',
    last_previous_status: 'AVAILABLE',
    last_previous_status_dt: '2023-01-01T00:00:00Z',
    status: 'AVAILABLE',
    status_dt: '2023-01-01T00:00:00Z',
  },
])

// Use mock data instead of API calls
const modelsRef = ref(mockModels.value)
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
  return orderBy(
    toPairs(modelCounters.value.byProvider),
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
  return orderBy(
    toPairs(modelCounters.value.byModel),
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
    orderBy(
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
  
  // Use mock data instead of API call
  const modelsAvailabilityRef = ref(mockAvailability.value)

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
