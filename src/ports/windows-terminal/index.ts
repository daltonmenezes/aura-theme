import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function WindowsTerminalPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Windows Terminal'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-windows-terminal-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  // fix: removes the alpha from hex unsupported by Windows Terminal
  const fixedSelectionBackground = colorSchemes.dark.accent17.slice(0, -2)

  await createPort({
    template: resolve(templateFolder, `${info.slug}.json`),
    replacements: {
      ...colorSchemes.dark,
      ...info,
      accent17: fixedSelectionBackground,
      displayName: `${info.shortName} Dark`,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.json`),
    outputFileName: `${info.slug}-soft-text`,
    replacements: {
      ...colorSchemes.darkSoft,
      ...info,
      accent17: fixedSelectionBackground,
      displayName: `${info.shortName} Dark (Soft Text)`,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.json`),
    outputFileName: `${info.slug}-soft-dark`,
    replacements: {
      ...colorSchemes.softDark,
      ...info,
      accent17: fixedSelectionBackground,
      displayName: `${info.shortName} Soft Dark`,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.json`),
    outputFileName: `${info.slug}-soft-dark-soft-text`,
    replacements: {
      ...colorSchemes.softDarkSoft,
      ...info,
      accent17: fixedSelectionBackground,
      displayName: `${info.shortName} Soft Dark (Soft Text)`,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
