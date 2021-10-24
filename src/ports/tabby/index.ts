import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TabbyPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes } = Aura

  const portName = 'Tabby'
  const version = '1.0.0'
  const templateFolder = resolve(__dirname, 'templates')

  const background_color = '#21202e'

  await createPort({
    template: resolve(templateFolder, `tabby-colors.yaml`),
    replacements: {
      ...colorSchemes.dark,
      background_color,
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
