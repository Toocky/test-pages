// Simple implementation of some lodash-like functions

export const useToPairs = function<T extends Record<string, any>>(obj: T): [string, any][] {
  return Object.entries(obj);
};

export const useOrderBy = function<T>(
  collection: T[],
  iteratee: ((item: T) => any) | string,
  order: 'asc' | 'desc' = 'asc'
): T[] {
  const sorted = [...collection].sort((a, b) => {
    const valueA = typeof iteratee === 'function' ? iteratee(a) : a[iteratee as keyof T];
    const valueB = typeof iteratee === 'function' ? iteratee(b) : b[iteratee as keyof T];
    
    if (valueA === valueB) return 0;
    
    if (order === 'asc') {
      return valueA < valueB ? -1 : 1;
    } else {
      return valueA > valueB ? -1 : 1;
    }
  });
  
  return sorted;
};

export const useMin = function<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array.reduce((min, val) => val < min ? val : min, array[0]);
};

export const useMax = function<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array.reduce((max, val) => val > max ? val : max, array[0]);
};
