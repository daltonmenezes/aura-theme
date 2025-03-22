import { AuraAPI } from 'core'
import { resolve } from 'path'

function hexToRGBA(hex: string): string {
  hex = hex.replace(/^#/, '')
  let r: number,
    g: number,
    b: number,
    a: number = 1

  if (hex.length === 3 || hex.length === 4) {
    r = parseInt(hex[0] + hex[0], 16)
    g = parseInt(hex[1] + hex[1], 16)
    b = parseInt(hex[2] + hex[2], 16)
    if (hex.length === 4) {
      a = parseInt(hex[3] + hex[3], 16) / 255
    }
  } else if (hex.length === 6 || hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
    if (hex.length === 8) {
      a = parseInt(hex.slice(6, 8), 16) / 255
    }
  } else {
    throw new Error(
      'Invalid Hex format. Use #RGB, #RGBA, #RRGGBB, or #RRGGBBAA.'
    )
  }

  return `${r / 255} ${g / 255} ${b / 255} ${a}`
}

export async function Xcode(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Xcode'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-xcode-preview.png?raw=true`

  const darkColorScheme: Record<string, string> = {}
  for (const [key, hexValue] of Object.entries(colorSchemes.dark)) {
    darkColorScheme[key] = hexToRGBA(hexValue)
  }

  const darkSoftTextColorScheme: Record<string, string> = {}
  for (const [key, hexValue] of Object.entries(colorSchemes.darkSoft)) {
    darkSoftTextColorScheme[key] = hexToRGBA(hexValue)
  }

  const softDarkColorScheme: Record<string, string> = {}
  for (const [key, hexValue] of Object.entries(colorSchemes.softDark)) {
    softDarkColorScheme[key] = hexToRGBA(hexValue)
  }

  const softDarkSoftTextColorScheme: Record<string, string> = {}
  for (const [key, hexValue] of Object.entries(colorSchemes.softDarkSoft)) {
    softDarkSoftTextColorScheme[key] = hexToRGBA(hexValue)
  }

  await createPort({
    template: resolve(templateFolder, 'theme.xccolortheme'),
    outputFileName: `Aura Dark`,
    replacements: {
      ...darkColorScheme,
      ...info,
    },
  })

  await createPort({
    template: resolve(templateFolder, 'theme.xccolortheme'),
    outputFileName: `Aura Dark (Soft Text)`,
    replacements: {
      ...darkSoftTextColorScheme,
      ...info,
    },
  })

  await createPort({
    template: resolve(templateFolder, 'theme.xccolortheme'),
    outputFileName: `Aura Soft Dark`,
    replacements: {
      ...softDarkColorScheme,
      ...info,
    },
  })

  await createPort({
    template: resolve(templateFolder, 'theme.xccolortheme'),
    outputFileName: `Aura Soft Dark (Soft Text)`,
    replacements: {
      ...softDarkSoftTextColorScheme,
      ...info,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
