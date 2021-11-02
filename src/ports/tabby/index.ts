import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TabbyPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes } = Aura

  const portName = 'Tabby'
  const version = '1.0.0'
  const theme_name = 'Aura Theme'
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, `tabby-colors.yaml`),
    replacements: {
      ...colorSchemes.dark,
      theme_name,
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
