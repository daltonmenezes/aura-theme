import { AuraAPI } from 'core'
import { resolve } from 'path'
import { colorsService, functionCompositionService } from 'services'
import { folders } from 'shared/constants'

const { shade, desaturate } = colorsService()
const { compose } = functionCompositionService()
const shadeAndDesaturate = compose(shade(0.63), desaturate(0.2))

export async function ZedPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  console.log(shadeAndDesaturate(colorSchemes.dark.accent1))

  const portName: string = 'Zed'
  const version = '1.0.0'
  const type = 'dark'
  const templateFolder = resolve(__dirname, 'templates')
  const template = resolve(templateFolder, 'theme.json')
  const outputDist = resolve(folders.distFolder, 'zed', 'themes')

  const names = {
    auraDark: `${info.shortName} Dark`,
    auraDarkSoftText: `${info.shortName} Dark (Soft Text)`,
    auraSoftDark: `${info.shortName} Soft Dark`,
    auraSoftDarkSoftText: `${info.shortName} Soft Dark (Soft Text)`,
  }

  await createPort({
    template: resolve(templateFolder, 'extension.toml'),
    outputFileName: `extension`,
    replacements: {
      ...info,
      portName,
      version,
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-dark`,
    replacements: {
      ...info,
      type,
      ...colorSchemes.dark,
      name: names.auraDark,
      ...createTransparentAccents(colorSchemes.dark),
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-dark-soft-text`,
    replacements: {
      ...info,
      type,
      ...colorSchemes.darkSoft,
      name: names.auraDarkSoftText,
      ...createTransparentAccents(colorSchemes.darkSoft),
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-soft-dark`,
    replacements: {
      ...info,
      type,
      ...colorSchemes.softDark,
      name: names.auraSoftDark,
      ...createTransparentAccents(colorSchemes.softDark),
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-soft-dark-soft-text`,
    replacements: {
      ...info,
      type,
      ...colorSchemes.softDarkSoft,
      name: names.auraSoftDarkSoftText,
      ...createTransparentAccents(colorSchemes.softDarkSoft),
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

function createTransparentAccents(colorScheme: Record<string, string>) {
  return {
    accent2Transparent: shadeAndDesaturate(colorScheme.accent2) + '7f',
    accent3Transparent: shadeAndDesaturate(colorScheme.accent3) + '7f',
    accent4Transparent: shadeAndDesaturate(colorScheme.accent4) + '7f',
    accent5Transparent: shadeAndDesaturate(colorScheme.accent5) + '7f',
    accent6Transparent: shadeAndDesaturate(colorScheme.accent6) + '7f',
    accent32Transparent: shadeAndDesaturate(colorScheme.accent32) + '7f',
  }
}
