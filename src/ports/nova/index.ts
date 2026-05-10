import { AuraAPI } from 'core'
import { resolve } from 'path'

type ThemeVariant = {
  name: string
  outputFileName: string
  colorScheme: Record<string, string>
}

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info, folders } = constants

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

  const variants: ThemeVariant[] = [
    {
      name: names.auraDark,
      outputFileName: 'aura-dark',
      colorScheme: colorSchemes.dark,
    },
    {
      name: names.auraDarkSoftText,
      outputFileName: 'aura-dark-soft-text',
      colorScheme: colorSchemes.darkSoft,
    },
    {
      name: names.auraSoftDark,
      outputFileName: 'aura-soft-dark',
      colorScheme: colorSchemes.softDark,
    },
    {
      name: names.auraSoftDarkSoftText,
      outputFileName: 'aura-soft-dark-soft-text',
      colorScheme: colorSchemes.softDarkSoft,
    },
  ]

  for (const variant of variants) {
    await createPort({
      template: resolve(templateFolder, 'theme.css'),
      outputDist: themesDist,
      outputFileName: variant.outputFileName,
      replacements: {
        ...info,
        ...variant.colorScheme,
        name: variant.name,
      },
    })
  }

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      ...names,
    },
  })
}
