# browser-profiles

Lightweight, modular browser profiler to collect non-invasive fingerprint signals and POST them to a backend.

- Outputs ESM and CJS bundles
- Modular collectors (basic, WebGL, WebGPU, storage quota, memory, fonts, UA-CH)
- Defaults to POST http://127.0.0.1 with JSON body { profile }

Install
- npm install
- npm run build

Usage (ESM)
import { collectProfile, collectAndSend, sendProfile } from 'browser-profiles'

// Collect only
const profile = await collectProfile()

// Collect and send (default endpoint)
const { profile: p, response } = await collectAndSend()

// Custom endpoint/headers
await sendProfile(profile, {
  endpoint: 'https://api.example.com/deviceprofiles',
  headers: { 'X-CSRF-Token': '...' },
})

Customize fonts
import { collectProfile } from 'browser-profiles'
import { FONT_LIST } from 'browser-profiles/dist/constants/fonts'

const profile2 = await collectProfile({ fontList: [ ...FONT_LIST, 'My Custom Font' ] })

Notes
- WebGPU fields may be null if unsupported or if adapter info is restricted.
- Fonts rely on the FontFace API local() source; results vary by platform and permissions.
- All fields are best-effort and may be null when unavailable.

