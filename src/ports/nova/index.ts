import { AuraAPI } from 'core'
import { resolve } from 'path'
import { folders } from 'shared/constants'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  const portName = 'Nova'
  const version = '1.0.0'

  await Promise.all([
    createPort({
      template: resolve(templateFolder, 'extension.json'),
      replacements: {
        ...constants.info,
      },
    }),

    createPort({
      template: resolve(templateFolder, 'Themes/Aura.css'),
      outputDist: resolve(folders.distFolder, 'nova', 'Themes'),
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
