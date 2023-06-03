import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function MattermostPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura

  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, `aura-dark.json`),
    replacements: {
      ...colorSchemes.dark,
    },
  })

  const { info } = constants
  const portName = 'Mattermost'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-mattermost-preview.png?raw=true`

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      previewURL,
      version,
    },
  })
}
