import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { folders, info } = constants

  const portName = 'Nova'
  const version = '1.0.0'
  const templateFolder = resolve(__dirname, 'templates')
  const extensionName = `${info.shortName}.novaextension`
  const extensionDist = resolve(folders.distFolder, 'nova', extensionName)
  const themesDist = resolve(extensionDist, 'Themes')

  const names = {
    auraDark: `${info.shortName} Dark`,
    auraDarkSoftText: `${info.shortName} Dark (Soft Text)`,
    auraSoftDark: `${info.shortName} Soft Dark`,
    auraSoftDarkSoftText: `${info.shortName} Soft Dark (Soft Text)`,
  }

  const themeTemplate = resolve(templateFolder, 'theme.css')

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
    outputFileName: names.auraDark,
    replacements: {
      ...colorSchemes.dark,
      name: names.auraDark,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: names.auraDarkSoftText,
    replacements: {
      ...colorSchemes.darkSoft,
      name: names.auraDarkSoftText,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: names.auraSoftDark,
    replacements: {
      ...colorSchemes.softDark,
      name: names.auraSoftDark,
    },
  })

  await createPort({
    template: themeTemplate,
    outputDist: themesDist,
    outputFileName: names.auraSoftDarkSoftText,
    replacements: {
      ...colorSchemes.softDarkSoft,
      name: names.auraSoftDarkSoftText,
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
