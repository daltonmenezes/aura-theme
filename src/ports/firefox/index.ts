import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function FirefoxPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Mozilla Firefox'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-firefox-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, 'manifest.json'),
    replacements: {
      ...colorSchemes.dark,
      ...info,
      version,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      previewURL,
    },
  })
}
