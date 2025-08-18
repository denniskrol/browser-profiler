import { PartialProfile } from '../types'

export async function collectMemory(): Promise<PartialProfile> {
  try {
    const perf: any = typeof performance !== 'undefined' ? performance : null
    if (!perf?.memory) return { jsHeapSizeLimit: null }
    return { jsHeapSizeLimit: perf.memory.jsHeapSizeLimit ?? null }
  } catch {
    return { jsHeapSizeLimit: null }
  }
}

