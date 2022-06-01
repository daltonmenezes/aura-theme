import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TilixPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Tilix'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-tilix-preview.png?raw=true`

  await createPort({
    template: resolve(templateFolder, `${info.slug}.json`),
    replacements: {
      ...colorSchemes.dark,
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
