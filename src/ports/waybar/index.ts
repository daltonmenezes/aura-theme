import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function WaybarPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Waybar'
  const version = '1.0.0'
  const previewURL = `https://user-images.githubusercontent.com/1149845/223881256-6726819c-5ce5-4c84-a84b-0a4f70993b96.png`

  await createPort({
    template: resolve(templateFolder, `style.css`),
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
