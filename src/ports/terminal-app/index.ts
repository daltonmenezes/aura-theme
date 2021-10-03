import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TerminalAppPort(Aura: AuraAPI) {
  const {
    createReadme,
    createFromInMemoryPort,
    colorHandlers,
    colorSchemes,
    createInMemoryPort,
    constants,
  } = Aura

  const { info } = constants

  const portName = 'Terminal.app'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-terminal-app-preview.png?raw=true`

  const itermTemplate = await createInMemoryPort({
    template: resolve(
      constants.folders.portsFolder,
      'iterm',
      'templates',
      'aura-theme.itermcolors'
    ),
    replacements: colorHandlers.schemeToTerminalRgb(colorSchemes.dark),
  })

  const { terminalConvertion } = colorHandlers
  const colorsFromIterm = terminalConvertion.iterm.import(itermTemplate)
  const template = terminalConvertion.terminalapp.export(colorsFromIterm)

  await createFromInMemoryPort({
    template,
    output: resolve(
      constants.folders.distFolder,
      'terminal-app',
      'aura-theme.terminal'
    ),
  })

  await createReadme({
    template: resolve(__dirname, 'templates', 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
