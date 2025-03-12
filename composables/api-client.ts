export const useApiClient = function (baseUrl: string) {
  const baseHeaders = new Headers();

  function fetch<T = unknown>(
    path: string,
    options?: Partial<Parameters<typeof $fetch<T>>[1]>,
  ): ReturnType<typeof $fetch<T>> {
    const headers = options?.headers ?? baseHeaders;
    return $fetch<T>(`${baseUrl}/${path}`, {
      ...options,
      headers,
    });
  }

  function request<T = unknown>(
    path: string,
    options?: Partial<Parameters<typeof useFetch<T>>[1]>,
  ): ReturnType<typeof useFetch<T>> {
    const headers = options?.headers ?? baseHeaders;
    return useFetch<T>(`${baseUrl}/${path}`, {
      ...options,
      headers,
    });
  }

  return {
    fetch,
    request,
  };
};
