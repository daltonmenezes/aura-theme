import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function NovaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Nova'
  const version = '1.0.0'

  await createPort({
    template: resolve(templateFolder, 'hello-aura.json'),
    replacements: {
      ...colorSchemes.dark,
      portName,
      version,
      hello: 'Hello from Aura!',
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
