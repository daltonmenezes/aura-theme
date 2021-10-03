import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TelegramPort(Aura: AuraAPI) {
  const {
    createPort,
    copyExtraFiles,
    createReadme,
    colorSchemes,
    constants,
    zip,
    unlink,
  } = Aura

  const { info } = constants

  const portName = 'Telegram'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-telegram-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await copyExtraFiles(__dirname)

  await createPort({
    template: resolve(templateFolder, `colors.tdesktop-theme`),
    replacements: {
      ...colorSchemes.dark,
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

  const telegramPackagePath = resolve('packages', 'telegram')
  const colorsFile = resolve(telegramPackagePath, 'colors.tdesktop-theme')
  const tiledFile = resolve(telegramPackagePath, 'tiled.png')
  const themeFile = resolve(telegramPackagePath, 'theme.tdesktop-theme')

  zip.addFile(colorsFile)
  zip.addFile(tiledFile)
  zip.writeZip(themeFile)

  zip.addFile(themeFile)
  zip.writeZip(resolve(telegramPackagePath, 'theme.tdesktop-theme.zip'))

  await unlink(colorsFile)
  await unlink(tiledFile)
  await unlink(themeFile)
}
