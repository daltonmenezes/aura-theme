import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info, folders } = constants

  const portName = 'Nova'
  const version = '1.0.0'
  const type = 'dark'
  const templateFolder = resolve(__dirname, 'templates')
  const themeTemplate = resolve(templateFolder, 'theme.css')
  const extensionDist = resolve(
    folders.distFolder,
    'nova',
    `${info.shortName}.novaextension`
  )
  const themesDist = resolve(extensionDist, 'Themes')

  const names = {
    auraDark: `${info.shortName} Dark`,
    auraDarkSoftText: `${info.shortName} Dark (Soft Text)`,
    auraSoftDark: `${info.shortName} Soft Dark`,
    auraSoftDarkSoftText: `${info.shortName} Soft Dark (Soft Text)`,
  }

  await createPort({
    template: resolve(templateFolder, 'extension.json'),
    outputDist: extensionDist,
    outputFileName: 'extension',
    replacements: {
      ...info,
      portName,
      version,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: 'aura-dark',
    replacements: {
      ...colorSchemes.dark,
      name: names.auraDark,
      type,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: 'aura-dark-soft-text',
    replacements: {
      ...colorSchemes.darkSoft,
      name: names.auraDarkSoftText,
      type,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: 'aura-soft-dark',
    replacements: {
      ...colorSchemes.softDark,
      name: names.auraSoftDark,
      type,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: 'aura-soft-dark-soft-text',
    replacements: {
      ...colorSchemes.softDarkSoft,
      name: names.auraSoftDarkSoftText,
      type,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
