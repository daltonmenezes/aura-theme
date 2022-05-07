import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function MattermostPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, `aura-dark.json`),
    replacements: {
      ...colorSchemes.dark,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {},
  })
}
