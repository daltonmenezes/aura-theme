import { AuraAPI } from 'core'
import { colorHandlers } from 'core/modules'
import { resolve } from 'path'

export async function PlasmaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'KDE Plasma'
  const version = '1.0.0'

  await createPort({
    template: resolve(templateFolder, `${info.slug}.colors`),
    replacements: {
      ...colorHandlers.schemeToRgb(colorSchemes.dark),
      displayName: info.displayName,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.colors`),
    replacements: {
      ...colorHandlers.schemeToRgb(colorSchemes.darkSoft),
      displayName: `${info.displayName} Soft`,
    },
    outputFileName: `${info.slug}-soft`,
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
