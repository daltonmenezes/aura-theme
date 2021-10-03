import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function ItermPort(Aura: AuraAPI) {
  const {
    createPort,
    createReadme,
    colorSchemes,
    colorHandlers,
    constants,
  } = Aura

  const { info } = constants

  const portName = 'iTerm'
  const version = '2.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-iterm-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, `${info.slug}.itermcolors`),
    replacements: colorHandlers.schemeToTerminalRgb(colorSchemes.dark),
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.itermcolors`),
    replacements: colorHandlers.schemeToTerminalRgb(colorSchemes.darkSoft),
    outputFileName: `${info.slug}-soft`,
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
