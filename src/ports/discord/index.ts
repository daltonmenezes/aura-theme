import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function DiscordPort(Aura: AuraAPI) {
  const { createReadme } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  const portName = 'Discord'
  const version = '1.0.0'

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
