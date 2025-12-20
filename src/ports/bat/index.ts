import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function BatPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Bat'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-bat-preview.png?raw=true`

  await createPort({
    template: resolve(templateFolder, `${info.slug}.tmTheme`),
    replacements: {
      ...colorSchemes.dark,
      ...info,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.tmTheme`),
    outputFileName: `${info.slug}-soft`,
    replacements: {
      ...colorSchemes.darkSoft,
      ...info,
      displayName: `${info.shortName} Theme Soft Dark`,
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
