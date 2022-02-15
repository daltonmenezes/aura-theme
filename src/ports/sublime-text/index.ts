import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function SublimeTextPort(Aura: AuraAPI) {
  const {
    createPort,
    createReadme,
    colorSchemes,
    constants,
    getPathByPlatformInDev,
  } = Aura

  const { info, folders } = constants

  const portName = 'Sublime Text'
  const version = '1.1.1'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-sublime-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  const outputDist = getPathByPlatformInDev({
    darwin: resolve(
      folders.homeFolder,
      'Library',
      'Application Support',
      portName,
      'Packages',
      'User',
      'Aura Theme Color Scheme'
    ),
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.tmTheme`),
    outputDist,
    replacements: {
      ...colorSchemes.dark,
      ...info,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.tmTheme`),
    outputFileName: `${info.slug}-soft`,
    outputDist,
    replacements: {
      ...colorSchemes.darkSoft,
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
