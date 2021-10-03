import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function RxvtUnicodePort(Aura: AuraAPI) {
  const { createPort, colorSchemes, createReadme, constants } = Aura
  const { info } = constants

  const portName = 'rxvt terminal'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-rxvt-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, '.Xresources'),
    replacements: colorSchemes.dark,
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
