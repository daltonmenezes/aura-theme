import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TermuxPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Termux'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-termux-preview.png?raw=true`

  await createPort({
    template: resolve(templateFolder, `${info.slug}.properties`),
    replacements: {
      ...colorSchemes.dark,
      ...withDarkSoftScheme(colorSchemes),
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
function withDarkSoftScheme(colorSchemes: AuraAPI['colorSchemes']) {
  return Object.entries(colorSchemes.darkSoft).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}Soft`]: value,
      }
    },
    {}
  )
}
