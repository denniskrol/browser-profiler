export const isBrowser = (): boolean => typeof window !== 'undefined' && typeof document !== 'undefined'

export const safeNavigator = (): Navigator | null => (typeof navigator !== 'undefined' ? navigator : null)

export const safeWindow = (): Window | null => (typeof window !== 'undefined' ? window : null)

export const safeDocument = (): Document | null => (typeof document !== 'undefined' ? document : null)

export function tryOrNull<T>(fn: () => T): T | null {
  try {
    return fn()
  } catch {
    return null
  }
}

