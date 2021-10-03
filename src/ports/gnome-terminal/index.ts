import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function GnomeTerminalPort(Aura: AuraAPI) {
  const {
    createPort,
    createReadme,
    colorSchemes,
    colorHandlers,
    constants,
  } = Aura

  const { info } = constants

  const portName = 'Gnome Terminal'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-gnome-terminal-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, `${info.slug}.dconf`),
    replacements: {
      ...colorHandlers.schemeToRgb(colorSchemes.dark),
      ...info,
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
