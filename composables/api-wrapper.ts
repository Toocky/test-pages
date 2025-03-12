export const useApiWrapper = function (baseUrl: string) {
  const apiClient = useApiClient(baseUrl);

  async function getItems<T>(path: string, params?: any): Promise<T[]> {
    const { data } = await apiClient.request<T[]>(path, { ...params });
    return data.value || [];
  }

  async function getItem<T>(
    path: string,
    itemId: number | string,
    params?: any
  ): Promise<T | null> {
    const { data } = await apiClient.request<T>(`${path}${itemId}`, { ...params });
    return data.value;
  }

  return {
    getItems,
    getItem,
  };
};
