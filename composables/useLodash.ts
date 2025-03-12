// Lodash-like utility functions for Nuxt 3

/**
 * Convert an object to an array of key-value pairs
 */
export function useLodash() {
  /**
   * Convert an object to an array of key-value pairs
   */
  const toPairs = function <T extends Record<string, any>>(
    obj: T,
  ): [string, any][] {
    return Object.entries(obj)
  }

  /**
   * Sort an array by one or more iteratee functions
   */
  const orderBy = function <T>(
    collection: T[],
    iteratee: ((item: T) => any) | string | Array<((item: T) => any) | string>,
    order: 'asc' | 'desc' | Array<'asc' | 'desc'> = 'asc',
  ): T[] {
    // Handle array of iteratees
    const iteratees = Array.isArray(iteratee) ? iteratee : [iteratee]
    const orders = Array.isArray(order) ? order : [order]

    // Ensure orders array is at least as long as iteratees
    while (orders.length < iteratees.length) {
      orders.push(orders[orders.length - 1] || 'asc')
    }

    return [...collection].sort((a, b) => {
      for (let i = 0; i < iteratees.length; i++) {
        const currentIteratee = iteratees[i]
        const currentOrder = orders[i] || 'asc'

        const valueA =
          typeof currentIteratee === 'function'
            ? currentIteratee(a)
            : a[currentIteratee as keyof T]

        const valueB =
          typeof currentIteratee === 'function'
            ? currentIteratee(b)
            : b[currentIteratee as keyof T]

        if (valueA === valueB) {
          // If values are equal, continue to next iteratee
          continue
        }

        if (currentOrder === 'asc') {
          return valueA < valueB ? -1 : 1
        } else {
          return valueA > valueB ? -1 : 1
        }
      }

      // If all iteratees resulted in equal values
      return 0
    })
  }

  /**
   * Get the minimum value from an array
   */
  const min = function <T>(array: T[]): T | undefined {
    if (array.length === 0) return undefined
    return array.reduce((min, val) => (val < min ? val : min), array[0])
  }

  /**
   * Get the maximum value from an array
   */
  const max = function <T>(array: T[]): T | undefined {
    if (array.length === 0) return undefined
    return array.reduce((max, val) => (val > max ? val : max), array[0])
  }

  return {
    toPairs,
    orderBy,
    min,
    max,
  }
}
