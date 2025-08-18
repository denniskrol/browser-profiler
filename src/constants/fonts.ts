// Curated font lists by platform/vendors and popular desktop apps.
// These are used as candidates for detection via the FontFace local() source.

export const WindowsFonts: Record<string, string[]> = {
  '7': [
    'Cambria Math',
    'Lucida Console',
  ],
  '8': [
    'Aldhabi',
    'Gadugi',
    'Myanmar Text',
    'Nirmala UI',
  ],
  '8.1': [
    'Leelawadee UI',
    'Javanese Text',
    'Segoe UI Emoji',
  ],
  '10': [
    'HoloLens MDL2 Assets',
    'Segoe MDL2 Assets',
    'Bahnschrift',
    'Ink Free',
  ],
  '11': ['Segoe Fluent Icons'],
}

export const MacOSFonts: Record<string, string[]> = {
  '10.9': [
    'Helvetica Neue',
    'Geneva',
  ],
  '10.10': [
    'Kohinoor Devanagari Medium',
    'Luminari',
  ],
  '10.11': [
    'PingFang HK Light',
  ],
  '10.12': [
    'American Typewriter Semibold',
    'Futura Bold',
    'SignPainter-HouseScript Semibold',
  ],
  '10.13-10.14': [
    'InaiMathi Bold',
  ],
  '10.15-11': [
    'Galvji',
    'MuktaMahee Regular',
  ],
  '12': [
    'Noto Sans Gunjala Gondi Regular',
    'Noto Sans Masaram Gondi Regular',
    'Noto Serif Yezidi Regular',
  ],
  '13': [
    'Apple SD Gothic Neo ExtraBold',
    'STIX Two Math Regular',
    'STIX Two Text Regular',
    'Noto Sans Canadian Aboriginal Regular',
  ],
}

export const DesktopAppFonts: Record<string, string[]> = {
  'Microsoft Outlook': ['MS Outlook'],
  'Adobe Acrobat': ['ZWAdobeF'],
  'LibreOffice': [
    'Amiri',
    'KACSTOffice',
    'Liberation Mono',
    'Source Code Pro',
  ],
  'OpenOffice': [
    'DejaVu Sans',
    'Gentium Book Basic',
    'OpenSymbol',
  ],
}

export const LINUX_FONTS = [
  'Arimo',
  'Chilanka',
  'Cousine',
  'Jomolhari',
  'MONO',
  'Noto Color Emoji',
  'Ubuntu',
]

export const ANDROID_FONTS = [
  'Dancing Script',
  'Droid Sans Mono',
  'Roboto',
]

export const APPLE_FONTS = Object.values(MacOSFonts).flat()
export const WINDOWS_FONTS = Object.values(WindowsFonts).flat()
export const DESKTOP_APP_FONTS = Object.values(DesktopAppFonts).flat()

export const FONT_LIST = [
  ...APPLE_FONTS,
  ...WINDOWS_FONTS,
  ...LINUX_FONTS,
  ...ANDROID_FONTS,
  ...DESKTOP_APP_FONTS,
].sort()

