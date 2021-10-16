import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function IcuePort(Aura: AuraAPI) {
  const { copyExtraFiles, createReadme } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  await copyExtraFiles(__dirname)

  const portName = 'iCue'
  const version = '1.0.0'

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
