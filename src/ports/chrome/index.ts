import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function ChromePort(Aura: AuraAPI) {
  const {
    zip,
    unlink,
    constants,
    createPort,
    createReadme,
    colorSchemes,
    colorHandlers,
    copyExtraFiles,
  } = Aura

  const { info, isProd } = constants

  const portName = 'Google Chrome'
  const version = '2.0.0'
  const extensionID = 'ddipnaombfnagpagnpdkdinoekfhfjoh'
  const templateFolder = resolve(__dirname, 'templates')
  const previewURL = `https://github.com/${info.author.username}/${info.slug}/assets/1149845/b6400889-80a0-4d63-97c9-f816a6bc24be`

  await copyExtraFiles(__dirname)

  await createPort({
    template: resolve(templateFolder, 'manifest.json'),

    replacements: {
      ...colorHandlers.schemeToRgb(colorSchemes.dark),
      ...info,
      version,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),

    replacements: {
      portName,
      previewURL,
      extensionID,
    },
  })

  const chromePackagePath = resolve('packages', 'chrome')
  const manifestFile = resolve(chromePackagePath, 'manifest.json')

  if (isProd) {
    zip.addFile(manifestFile)

    zip.writeZip(
      resolve(chromePackagePath, 'store', 'chrome-aura-theme.zip')
    )

    await unlink(manifestFile)
  }
}
