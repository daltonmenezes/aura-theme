import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function RaycastPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Raycast'
  const version = '1.0.0'

  const previewURL =
    'https://github.com/user-attachments/assets/4a636963-bf74-413b-8542-f0b997aee76f'

  await Promise.all([
    createPort({
      template: resolve(templateFolder, `${info.slug}.json`),
      replacements: {
        ...colorSchemes.dark,
        ...info,
      },
    }),

    createReadme({
      template: resolve(templateFolder, 'README.md'),
      replacements: {
        portName,
        version,
        previewURL,
      },
    }),
  ])
}
