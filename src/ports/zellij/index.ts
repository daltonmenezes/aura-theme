import { AuraAPI } from 'core'
import { colorHandlers } from 'core/modules'
import { resolve } from 'path'

export async function ZellijPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Zellij'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-zellij-preview.png?raw=true`

  // Helper function to convert RGB arrays to space-separated strings for Zellij config
  const rgbToSpaceSeparated = (rgbScheme: Record<string, unknown>) => {
    return Object.entries(rgbScheme).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        acc[key] = value.join(' ')
      } else {
        acc[key] = value
      }
      return acc
    }, {} as Record<string, unknown>)
  }

  await createPort({
    template: resolve(templateFolder, `${info.slug}.kdl`),
    outputFileName: `${info.slug}-dark`,
    replacements: {
      ...rgbToSpaceSeparated(colorHandlers.schemeToRgb(colorSchemes.dark)),
      ...info,
      version,
      slug: `${info.slug}-dark`,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.kdl`),
    outputFileName: `${info.slug}-dark-soft`,
    replacements: {
      ...rgbToSpaceSeparated(
        colorHandlers.schemeToRgb(colorSchemes.darkSoft)
      ),
      ...info,
      version,
      slug: `${info.slug}-dark-soft`,
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
