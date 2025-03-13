export interface IStatusInfo {
  dt: Date
  status: string
}

export interface IModelAvailabilityRow {
  model: string
  provider: string
  type: string
  avgCost: string | null
  inputCost: string | null
  outputCost: string | null
  maxTokens: number | null
  maxResponseTokens: number | null
  latencies: (number | null)[]
  latenciesFormatted: string[]
  latenciesRating: number[]
  states: (number | null)[]
  isExpanded: boolean
  totalTracked: number
  upTime: number | null
  upTimePercentage: number | null
  lastStatus?: IStatusInfo
}
