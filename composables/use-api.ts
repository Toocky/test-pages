import { useApiClient } from './api-client'

// Define the API base URL
const API_BASE_URL = 'https://api.apipie.ai'

export const useApi = function (path: string, options?: any) {
  const apiClient = useApiClient(API_BASE_URL)
  return apiClient.request(path, options)
}
