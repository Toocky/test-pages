import { useApiClient } from './api-client'

// Define the API base URL
const API_BASE_URL = 'https://apipie.ai'

export const useApi = function () {
  const apiClient = useApiClient(API_BASE_URL)

  // Return a function that can be called directly
  return function (path: string, options?: any) {
    return apiClient.request(path, options)
  }
}
