import { PartialProfile } from '../types'

export async function collectWebGPU(): Promise<PartialProfile> {
  try {
    const nav: any = typeof navigator !== 'undefined' ? navigator : null
    if (!nav?.gpu) return { webGpuArchitecture: null, webGpuVendor: null }

    const adapter: GPUAdapter | null = await nav.gpu.requestAdapter()
    if (!adapter) return { webGpuArchitecture: null, webGpuVendor: null }

    // Prefer requestAdapterInfo if available, otherwise fall back to adapter.info
    try {
      // @ts-expect-error: requestAdapterInfo is not yet in TS lib for all targets
      const info = await (adapter as any).requestAdapterInfo?.()
      if (info) {
        return {
          webGpuArchitecture: (info as any).architecture ?? null,
          webGpuVendor: (info as any).vendor ?? null,
        }
      }
    } catch {
      // ignore and try fallback
    }

    const info = (adapter as any).info
    return {
      webGpuArchitecture: info?.architecture ?? null,
      webGpuVendor: info?.vendor ?? null,
    }
  } catch {
    return { webGpuArchitecture: null, webGpuVendor: null }
  }
}

