import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function AlacrittyPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Alacritty terminal'
  const version = '1.0.1'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-alacritty-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, `${info.slug}.yml`),
    replacements: {
      ...colorSchemes.dark,
      ...info,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      version,
      portName,
      previewURL,
    },
  })
}
