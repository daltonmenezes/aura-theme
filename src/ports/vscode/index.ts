import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function VscodePort(Aura: AuraAPI) {
  const {
    copyExtraFiles,
    createPort,
    createReadme,
    colorSchemes,
    constants,
  } = Aura

  const { info, folders } = constants

  const portName = 'Visual Studio Code'
  const version = '2.1.2'
  const type = 'dark'
  const templateFolder = resolve(__dirname, 'templates')
  const template = resolve(templateFolder, 'theme.json')
  const outputDist = resolve(folders.distFolder, 'vscode', 'themes')
  const outputFileNameSuffix = 'color-theme'

  const names = {
    auraDark: `${info.shortName} Dark`,
    auraDarkSoftText: `${info.shortName} Dark (Soft Text)`,
    auraSoftDark: `${info.shortName} Soft Dark`,
    auraSoftDarkSoftText: `${info.shortName} Soft Dark (Soft Text)`,
  }

  await copyExtraFiles(__dirname)

  await createPort({
    template: resolve(templateFolder, 'package.json'),
    outputFileName: `package`,
    replacements: {
      ...info,
      ...names,
      type,
      portName,
      version,
      accent12: colorSchemes.dark.accent12,
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-dark-${outputFileNameSuffix}`,
    replacements: {
      type,
      ...colorSchemes.dark,
      name: names.auraDark,
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-dark-soft-text-${outputFileNameSuffix}`,
    replacements: {
      type,
      ...colorSchemes.darkSoft,
      name: names.auraDarkSoftText,
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-soft-dark-${outputFileNameSuffix}`,
    replacements: {
      type,
      ...colorSchemes.softDark,
      name: names.auraSoftDark,
    },
  })

  await createPort({
    template,
    outputDist,
    outputFileName: `aura-soft-dark-soft-text-${outputFileNameSuffix}`,
    replacements: {
      type,
      ...colorSchemes.softDarkSoft,
      name: names.auraSoftDarkSoftText,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {},
  })
}
