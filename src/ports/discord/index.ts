import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function DiscordPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Discord'
  const version = '1.0.0'

  // await createPort({
  //   template: resolve(templateFolder, `${info.slug}.yml`),
  //   replacements: {
  //     ...colorSchemes.dark,
  //     ...info,
  //   },
  // })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
