import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function InsomniaPort(Aura: AuraAPI) {
  const {
    copyExtraFiles,
    createPort,
    createReadme,
    colorSchemes,
    constants,
    getPathByPlatformInDev,
  } = Aura

  const { info, isDev } = constants

  const portName = isDev ? 'Insomnia Dev' : 'Insomnia'
  const npmPackage = 'insomnia-plugin-aura-theme'
  const portSlug = isDev ? `${info.slug}-dev` : info.slug
  const displayName = isDev ? `${info.displayName} Dev` : info.displayName
  const packageName = isDev ? `${npmPackage}-dev` : npmPackage
  const version = '2.0.2'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-insomnia-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  const outputDist = getPathByPlatformInDev({
    darwin: resolve(
      constants.folders.homeFolder,
      'Library',
      'Application Support',
      'Insomnia',
      'plugins',
      packageName
    ),

    linux: resolve(
      constants.folders.homeFolder,
      '.config',
      'Insomnia',
      'plugins',
      packageName
    ),
  })

  await copyExtraFiles(__dirname, outputDist)

  await createPort({
    template: resolve(templateFolder, 'index.js'),
    outputDist,
    replacements: {
      ...colorSchemes.dark,
      displayName,
      name: portSlug,
    },
  })

  await createPort({
    template: resolve(templateFolder, 'package.json'),
    outputDist,
    replacements: {
      ...info,
      portName,
      version,
      npmPackage: packageName,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    outputDist,
    replacements: {
      portName,
      npmPackage,
      previewURL,
    },
  })
}
