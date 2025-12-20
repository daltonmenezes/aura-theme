import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function LsdPort(Aura: AuraAPI) {
  const {
    createPort,
    createReadme,
    colorSchemes,
    constants,
    copyExtraFiles,
  } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Lsd'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-lsd-preview.png?raw=true`

  // Helper function to remove alpha channel from chosen theme colors as lsd does not support them
  const stripAlpha = (color: string): string => {
    if (color.length === 9 && color.startsWith('#')) {
      return color.substring(0, 7)
    }
    return color
  }

  // Strip alpha channels from all accent colors
  const stripAlphaFromScheme = (scheme: Record<string, string>) => {
    const stripped: Record<string, string> = {}
    for (const [key, value] of Object.entries(scheme)) {
      stripped[key] = typeof value === 'string' ? stripAlpha(value) : value
    }
    return stripped
  }

  await createPort({
    template: resolve(templateFolder, `colors.yaml`),
    outputFileName: `dark-colors`,
    replacements: {
      ...stripAlphaFromScheme(colorSchemes.dark),
      ...info,
      version,
    },
  })

  await createPort({
    template: resolve(templateFolder, `colors.yaml`),
    outputFileName: `dark-soft-colors`,
    replacements: {
      ...stripAlphaFromScheme(colorSchemes.darkSoft),
      ...info,
      version,
    },
  })

  await copyExtraFiles(__dirname)

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
