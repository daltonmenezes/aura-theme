import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function HelixPort(Aura: AuraAPI) {
  const {
    createPort,
    createReadme,
    colorSchemes,
    createInMemoryPort,
    createFromInMemoryPort,
  } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  const portName = 'Helix'
  const version = '1.0.0'

  await createPort({
    template: resolve(templateFolder, `aura.toml`),
    replacements: {
      ...colorSchemes.dark,
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
