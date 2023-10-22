import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function WarpPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Warp'
  const version = '1.0.0'

  await createPort({
    template: resolve(templateFolder, `${info.slug}.yaml`),
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
    },
  })
}
