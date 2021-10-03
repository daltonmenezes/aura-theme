import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function HyperPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info } = constants

  const portName = 'Hyper terminal'
  const npmPackage = 'hyper-aura-theme'
  const version = '2.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-hyper-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, 'index.js'),
    replacements: colorSchemes.dark,
  })

  await createPort({
    template: resolve(templateFolder, 'package.json'),
    replacements: {
      ...info,
      portName,
      npmPackage,
      version,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      npmPackage,
      previewURL,
    },
  })
}
