import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function SwayPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Sway'
  const previewURL =
    'https://user-images.githubusercontent.com/1149845/224836544-4c9d8054-f1da-4e4d-b142-d19bac9186fa.png'
  const version = '1.0.0'

  await createPort({
    template: resolve(templateFolder, 'aura-theme.conf'),
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
      previewURL,
    },
  })
}
