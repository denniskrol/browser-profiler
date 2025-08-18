import { PartialProfile, StorageQuotaInfo } from '../types'

export async function collectStorage(): Promise<PartialProfile> {
  try {
    const nav: any = typeof navigator !== 'undefined' ? navigator : null
    if (!nav?.storage?.estimate) return { storageQuota: null }
    const est = await nav.storage.estimate()
    const info: StorageQuotaInfo = {
      quota: est.quota ?? null,
      usage: est.usage ?? null,
      available: est.quota != null && est.usage != null ? est.quota - est.usage : null,
    }
    return { storageQuota: info }
  } catch {
    return { storageQuota: null }
  }
}

