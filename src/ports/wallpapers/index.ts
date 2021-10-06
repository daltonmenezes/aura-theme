import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function WallpapersPort(Aura: AuraAPI) {
  const { copyExtraFiles, createReadme, constants, zip } = Aura

  const portName = 'Wallpapers'
  const version = '1.1.0'
  const templateFolder = resolve(__dirname, 'templates')

  const distWallpapersFolder = resolve(
    constants.folders.distFolder,
    'wallpapers'
  )

  await copyExtraFiles(__dirname)

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      noTagLine: true,
    },
  })

  await zip.zipFolder(
    resolve(distWallpapersFolder, 'aura-theme-wallpapers'),
    resolve(distWallpapersFolder, 'aura-theme-wallpapers.zip')
  )
}
