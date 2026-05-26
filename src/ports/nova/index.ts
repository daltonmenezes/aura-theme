import { AuraAPI } from 'core'
import { resolve } from 'path'
import { folders } from 'shared/constants'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Nova'
  const version = '1.0.0'
  const templateFolder = resolve(__dirname, 'templates')
  const extensionDist = resolve(
    folders.distFolder,
    'nova',
    `${info.displayName}.novaextension`
  )
  const themesDist = resolve(extensionDist, 'Themes')

  await createPort({
    template: resolve(templateFolder, 'extension.json'),
    outputDist: extensionDist,
    replacements: {
      ...info,
      portName,
      version,
    },
  })

  await createNovaTheme('Aura Dark', colorSchemes.dark)
  await createNovaTheme('Aura Dark (Soft Text)', colorSchemes.darkSoft)
  await createNovaTheme('Aura Soft Dark', colorSchemes.softDark)
  await createNovaTheme(
    'Aura Soft Dark (Soft Text)',
    colorSchemes.softDarkSoft
  )

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })

  async function createNovaTheme(
    name: string,
    colorScheme: Record<string, string>
  ) {
    await createPort({
      template: resolve(templateFolder, 'theme.css'),
      outputDist: themesDist,
      outputFileName: name,
      replacements: {
        ...info,
        ...colorScheme,
      },
    })
  }
}
