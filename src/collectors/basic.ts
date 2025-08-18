import { PartialProfile } from '../types'
import { safeNavigator, safeWindow, safeDocument } from '../utils'

export async function collectBasic(): Promise<PartialProfile> {
  const nav = safeNavigator()
  const win = safeWindow()
  const doc = safeDocument()

  return {
    userAgent: nav?.userAgent ?? null,
    platform: nav?.platform ?? null,
    deviceMemory: (nav as any)?.deviceMemory ?? null,
    hardwareConcurrency: nav?.hardwareConcurrency ?? null,
    vendor: (nav as any)?.vendor ?? null,
    screenHeight: win?.screen?.height ?? null,
    screenWidth: win?.screen?.width ?? null,
    viewportHeight: doc?.documentElement?.clientHeight ?? null,
    viewportWidth: doc?.documentElement?.clientWidth ?? null,
    devicePixelRatio: win?.devicePixelRatio ?? null,
  }
}

