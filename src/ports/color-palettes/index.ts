import { AuraAPI } from 'core'
import { resolve } from 'path'
import palettes from './palettes'

export async function ColorPalettesPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Color Palettes'
  const version = '2.2.0'
  const templateFolder = resolve(__dirname, 'templates')

  const {
    darkRGBScheme,
    darkSchemeWithoutHashes,
    darkSoftRGBScheme,
    darkSoftScheme,
    darkSoftSchemeWithoutHashes,
  } = palettes(Aura)

  await createPort({
    template: resolve(templateFolder, 'aura-colors.css'),
    replacements: {
      ...colorSchemes.dark,
      ...darkSoftScheme,
    },
  })

  await createPort({
    template: resolve(templateFolder, 'aura-colors.sass'),
    replacements: {
      ...colorSchemes.dark,
      ...darkSoftScheme,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      ...colorSchemes.dark,
      ...darkRGBScheme,
      ...darkSchemeWithoutHashes,
      ...darkSoftScheme,
      ...darkSoftRGBScheme,
      ...darkSoftSchemeWithoutHashes,
      portName,
      version,
      noTagLine: true,
      shortName: info.shortName.toLowerCase(),
    },
  })
}
