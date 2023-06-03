import { AuraAPI } from 'core'
import { resolve } from 'path'

import colorSchemes from './colorSchemes'

export async function NeovimPort(Aura: AuraAPI) {
  const { constants, copyExtraFiles, createPort, createReadme } = Aura
  const { folders } = constants

  const templateFolder = resolve(__dirname, 'templates')
  const extraFolder = resolve(__dirname, 'extra')
  const distFolder = resolve(
    folders.distFolder,
    'neovim',
    'lua',
    'aura-theme',
    'common'
  )

  const portName = 'neovim'
  const version = '0.1.0'

  const schemes = colorSchemes(Aura)

  await copyExtraFiles(__dirname)
  await createPort({
    template: resolve(extraFolder, 'lua/aura-theme/common/core.lua'),
    replacements: {
      ...schemes.dark,
      ...schemes.darkSoft,
      ...schemes.softDark,
      ...schemes.softDarkSoft,
    },
    outputDist: distFolder,
  })
  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
