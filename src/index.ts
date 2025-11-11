import type {
  DeviceProfile,
  PartialProfile,
  CollectOptions,
  SendOptions,
  CollectAndSendOptions,
} from './types'

import { collectBasic } from './collectors/basic'
import { collectWebGL } from './collectors/webgl'
import { collectWebGPU } from './collectors/webgpu'
import { collectStorage } from './collectors/storage'
import { collectMemory } from './collectors/memory'
import { collectFonts } from './collectors/fonts'
import { collectUserAgentData } from './collectors/uaData'

export * from './types'
export * as Fonts from './constants/fonts'

function baseProfile(): DeviceProfile {
  return {
    userAgent: null,
    platform: null,
    deviceMemory: null,
    hardwareConcurrency: null,
    vendor: null,
    screenHeight: null,
    screenWidth: null,
    viewportHeight: null,
    viewportWidth: null,
    devicePixelRatio: null,
    webglRenderer: null,
    webglVendor: null,
    webGpuArchitecture: null,
    webGpuVendor: null,
    storageQuota: null,
    jsHeapSizeLimit: null,
    fonts: [],
    userAgentData: null,
  }
}

function mergeProfiles(target: DeviceProfile, patch: PartialProfile): DeviceProfile {
  return Object.assign(target, patch)
}

export async function collectProfile(options?: CollectOptions): Promise<DeviceProfile> {
  const profile = baseProfile()

  const [
    basic,
    webgl,
    webgpu,
    storage,
    memory,
    fonts,
    uaData,
  ] = await Promise.all([
    collectBasic(),
    collectWebGL(),
    collectWebGPU(),
    collectStorage(),
    collectMemory(),
    collectFonts(options),
    collectUserAgentData(),
  ])

  mergeProfiles(profile, basic)
  mergeProfiles(profile, webgl)
  mergeProfiles(profile, webgpu)
  mergeProfiles(profile, storage)
  mergeProfiles(profile, memory)
  mergeProfiles(profile, fonts)
  mergeProfiles(profile, uaData)

  return profile
}

export async function sendProfile(
  profile: DeviceProfile,
  options?: SendOptions,
): Promise<Response> {
  const endpoint = options?.endpoint ?? 'http://127.0.0.1'
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(options?.headers ?? {}),
  }

  const resp = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ profile }),
    signal: options?.signal,
    keepalive: true,
  })

  return resp
}

export async function collectAndSend(
  options?: CollectAndSendOptions,
): Promise<{ profile: DeviceProfile; response: Response | null }> {
  const profile = await collectProfile(options)
  if (options?.send === false) {
    return { profile, response: null }
  }
  const response = await sendProfile(profile, options)
  return { profile, response }
}

