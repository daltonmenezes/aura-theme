import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function FigPort(Aura: AuraAPI) {
  const {
    constants,
    createPort,
    createReadme,
    colorSchemes,
    getPathByPlatformInDev,
  } = Aura

  const templateFolder = resolve(__dirname, 'templates')
  const { info, folders } = constants

  const portName = 'Fig'
  const version = '1.0.0'
  const twitter = '@daltonmenezes'
  const github = 'daltonmenezes'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-fig-preview.png?raw=true`

  const outputDist = getPathByPlatformInDev({
    darwin: resolve(folders.homeFolder, '.fig', 'themes'),
  })

  await createPort({
    template: resolve(templateFolder, `aura-dark.json`),
    outputDist,
    replacements: {
      ...colorSchemes.dark,
      ...info,
      twitter,
      github,
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
