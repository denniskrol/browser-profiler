import { PartialProfile } from '../types'

export async function collectWebGL(): Promise<PartialProfile> {
  try {
    const canvas = document.createElement('canvas')
    const gl = (canvas.getContext('webgl') || canvas.getContext('webgl-experimental')) as WebGLRenderingContext | null
    if (!gl) {
      return { webglRenderer: null, webglVendor: null, webglExtensions: [] }
    }

    let webglRenderer: string | null = null
    let webglVendor: string | null = null

    const ext = gl.getExtension('WEBGL_debug_renderer_info') as any
    if (ext) {
      try {
        webglRenderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) as any
        webglVendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) as any
      } catch {
        // ignore
      }
    }

    let webglExtensions: string[] = []
    try {
      webglExtensions = gl.getSupportedExtensions() ?? []
    } catch {
      // ignore
    }

    return { webglRenderer, webglVendor, webglExtensions }
  } catch {
    return { webglRenderer: null, webglVendor: null, webglExtensions: [] }
  }
}

