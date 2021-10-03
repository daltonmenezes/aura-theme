import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function SlackPort(Aura: AuraAPI) {
  const { createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Slack'
  const version = '2.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-slack-preview.png?raw=true`

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
