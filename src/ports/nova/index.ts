import { AuraAPI } from 'core'
import { resolve } from 'path'
import { folders } from 'shared/constants'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants
  const templateFolder = resolve(__dirname, 'templates')
  const outputDist = resolve(
    folders.distFolder,
    'nova',
    'Aura.novaextension'
  )
  const themesDist = resolve(outputDist, 'Themes')

  const portName = 'Nova'
  const version = '1.0.0'
  const themeTemplate = resolve(templateFolder, 'theme.css')

  await Promise.all([
    createPort({
      template: resolve(templateFolder, 'extension.json'),
      outputDist,
      replacements: {
        ...info,
        portName,
        version,
      },
    }),

    createPort({
      template: themeTemplate,
      outputDist: themesDist,
      outputFileName: 'Aura Dark',
      replacements: {
        ...info,
        ...colorSchemes.dark,
        name: 'Aura Dark',
      },
    }),

    createPort({
      template: themeTemplate,
      outputDist: themesDist,
      outputFileName: 'Aura Dark Soft Text',
      replacements: {
        ...info,
        ...colorSchemes.darkSoft,
        name: 'Aura Dark Soft Text',
      },
    }),

    createPort({
      template: themeTemplate,
      outputDist: themesDist,
      outputFileName: 'Aura Soft Dark',
      replacements: {
        ...info,
        ...colorSchemes.softDark,
        name: 'Aura Soft Dark',
      },
    }),

    createPort({
      template: themeTemplate,
      outputDist: themesDist,
      outputFileName: 'Aura Soft Dark Soft Text',
      replacements: {
        ...info,
        ...colorSchemes.softDarkSoft,
        name: 'Aura Soft Dark Soft Text',
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
