import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function ChromePort(Aura: AuraAPI) {
  const {
    copyExtraFiles,
    createPort,
    createReadme,
    colorSchemes,
    colorHandlers,
    constants,
    zip,
    unlink,
  } = Aura

  const { info } = constants

  const portName = 'Google Chrome'
  const version = '1.0.2'
  const extensionID = 'ddipnaombfnagpagnpdkdinoekfhfjoh'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-chrome-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

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
      extensionID,
      previewURL,
    },
  })

  const chromePackagePath = resolve('packages', 'chrome')
  const manifestFile = resolve(chromePackagePath, 'manifest.json')

  const backgroundFile = resolve(
    chromePackagePath,
    'theme_tab_background.png'
  )

  zip.addFile(manifestFile)
  zip.addFile(backgroundFile)
  zip.writeZip(resolve(chromePackagePath, 'store', 'chrome-aura-theme.zip'))

  await unlink(manifestFile)
  await unlink(backgroundFile)
}
