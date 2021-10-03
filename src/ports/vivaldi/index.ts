import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function VivaldiPort(Aura: AuraAPI) {
  const { createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Vivaldi'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-vivaldi-preview.png?raw=true`

  await createReadme({
    template: resolve(__dirname, 'templates', 'README.md'),
    replacements: {
      ...colorSchemes.dark,
      portName,
      version,
      previewURL,
    },
  })
}
