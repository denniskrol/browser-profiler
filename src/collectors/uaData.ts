import { PartialProfile, UserAgentData } from '../types'

const HINTS = [
  'architecture',
  'bitness',
  'brands',
  'mobile',
  'model',
  'platform',
  'platformVersion',
  'uaFullVersion',
  'fullVersionList',
] as const

export async function collectUserAgentData(): Promise<PartialProfile> {
  try {
    const nav: any = typeof navigator !== 'undefined' ? navigator : null
    if (!nav?.userAgentData?.getHighEntropyValues) return { userAgentData: null }
    const data = (await nav.userAgentData.getHighEntropyValues(HINTS as any)) as UserAgentData
    return { userAgentData: data }
  } catch {
    return { userAgentData: null }
  }
}

