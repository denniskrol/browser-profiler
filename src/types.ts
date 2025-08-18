export interface UaBrandEntry {
  brand: string
  version: string
}

export interface UserAgentData {
  architecture: string | null
  bitness: string | null
  brands?: UaBrandEntry[]
  fullVersionList?: UaBrandEntry[]
  mobile?: boolean
  model?: string
  platform?: string
  platformVersion?: string
  uaFullVersion?: string
}

export interface StorageQuotaInfo {
  quota: number | null
  usage: number | null
  available: number | null
}

export interface DeviceProfile {
  userAgent: string | null
  platform: string | null
  deviceMemory: number | null
  hardwareConcurrency: number | null
  vendor: string | null
  screenHeight: number | null
  screenWidth: number | null
  viewportHeight: number | null
  viewportWidth: number | null
  devicePixelRatio: number | null
  webglRenderer: string | null
  webglVendor: string | null
  webglExtensions: string[]
  webGpuArchitecture: string | null
  webGpuVendor: string | null
  storageQuota: StorageQuotaInfo | null
  jsHeapSizeLimit: number | null
  fonts: string[]
  userAgentData: UserAgentData | null
}

export type PartialProfile = Partial<DeviceProfile>

export interface CollectOptions {
  fontList?: string[]
}

export interface SendOptions {
  endpoint?: string
  headers?: Record<string, string>
  signal?: AbortSignal
}

export interface CollectAndSendOptions extends CollectOptions, SendOptions {
  send?: boolean
}

