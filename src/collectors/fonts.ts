import { CollectOptions, PartialProfile } from '../types'
import { FONT_LIST } from '../constants/fonts'

async function detectFontsWithFontFace(fontList: string[]): Promise<string[]> {
  if (typeof FontFace === 'undefined') return []
  const faces = fontList.map((name) => new FontFace(name, `local("${name}")`))
  const settled = await Promise.allSettled(faces.map((f) => f.load()))
  const found: string[] = []
  for (const r of settled) {
    if (r.status === 'fulfilled') {
      found.push(r.value.family)
    }
  }
  return [...new Set(found)].sort()
}

export async function collectFonts(options?: CollectOptions): Promise<PartialProfile> {
  const list = options?.fontList ?? FONT_LIST
  try {
    const fonts = await detectFontsWithFontFace(list)
    return { fonts }
  } catch {
    return { fonts: [] }
  }
}

