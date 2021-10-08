import { AuraAPI } from 'core'
import { resolve } from 'path'

import {
  colorHandlers,
  createFromInMemoryPort,
  createInMemoryPort,
} from 'core/modules'

export async function KittyPort(Aura: AuraAPI) {
  const { createReadme, colorSchemes, constants } = Aura
  const { info, folders } = constants

  const portName = 'Kitty'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-kitty-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  const itermTemplate = await createInMemoryPort({
    template: resolve(
      folders.portsFolder,
      'iterm',
      'templates',
      'aura-theme.itermcolors'
    ),
    replacements: colorHandlers.schemeToTerminalRgb(colorSchemes.softDark),
  })

  const { terminalConvertion } = colorHandlers
  const colorsFromIterm = terminalConvertion.iterm.import(itermTemplate)
  const template = terminalConvertion.kitty.export(colorsFromIterm)

  await createFromInMemoryPort({
    template,
    output: resolve(folders.distFolder, 'kitty', 'aura-theme.conf'),
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
