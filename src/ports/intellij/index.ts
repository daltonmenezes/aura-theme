import { AuraAPI } from 'core'
import { resolve } from 'path'
import { copyExtraFiles } from 'root/src/core/modules'

export async function IntellijPort(Aura: AuraAPI) {
  const { createReadme } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  const portName = 'Intellij'
  const version = '1.0.0'

  await copyExtraFiles(__dirname)

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
