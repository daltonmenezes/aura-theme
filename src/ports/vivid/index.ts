import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function VividPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Vivid'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-vivid-preview.png?raw=true`

  // Strip # from hex colors for Vivid compatibility
  const stripHashFromScheme = (scheme: Record<string, unknown>) =>
    Object.entries(scheme).reduce((acc, [key, value]) => {
      if (typeof value === 'string' && value.startsWith('#')) {
        return { ...acc, [key]: value.replace('#', '') }
      }
      return { ...acc, [key]: value }
    }, {})

  await createPort({
    template: resolve(templateFolder, `${info.slug}-dark.yml`),
    outputFileName: `${info.slug}-dark`,
    replacements: {
      ...stripHashFromScheme(colorSchemes.dark),
      ...info,
      version,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}-dark-soft.yml`),
    outputFileName: `${info.slug}-dark-soft`,
    replacements: {
      ...stripHashFromScheme(colorSchemes.darkSoft),
      ...info,
      version,
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
