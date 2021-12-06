import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function VivaldiPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants, zip, unlink } =
    Aura

  const { info } = constants

  const portName = 'Vivaldi'
  const version = '1'
  const storeID = `QBEJe8kvyP9`
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-vivaldi-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')

  await createPort({
    template: resolve(templateFolder, 'settings.json'),
    replacements: {
      ...colorSchemes.dark,
      ...info,
      version,
    },
  })

  await createReadme({
    template: resolve(__dirname, 'templates', 'README.md'),
    replacements: {
      ...colorSchemes.dark,
      portName,
      version,
      previewURL,
      storeID,
    },
  })

  const vivaldiPackagePath = resolve('packages', 'vivaldi')
  const settingsFile = resolve(vivaldiPackagePath, 'settings.json')

  zip.addFile(settingsFile)

  zip.writeZip(
    resolve(vivaldiPackagePath, 'store', 'vivaldi-aura-theme.zip')
  )

  await unlink(settingsFile)
}
