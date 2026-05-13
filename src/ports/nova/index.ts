import { AuraAPI } from 'core'
import { resolve } from 'path'
import { folders } from 'shared/constants'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Nova'
  const version = '1.0.0'
  const templateFolder = resolve(__dirname, 'templates')
  const themesDist = resolve(folders.distFolder, 'nova', 'Themes')

  await Promise.all([
    createPort({
      template: resolve(templateFolder, 'extension.json'),
      replacements: {
        ...info,
        portName,
        version,
      },
    }),

    createPort({
      template: resolve(templateFolder, 'theme.css'),
      outputDist: themesDist,
      outputFileName: info.shortName,
      replacements: {
        ...colorSchemes.dark,
      },
    }),

    createReadme({
      template: resolve(templateFolder, 'README.md'),
      replacements: {
        portName,
        version,
      },
    }),
  ])
}
