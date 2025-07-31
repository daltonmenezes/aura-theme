import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function IntellijPort(Aura: AuraAPI) {
  const { createReadme, copyExtraFiles } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  const portName = 'Intellij'
  const version = '1.0.0'

  const previewURL =
    'https://github.com/user-attachments/assets/471ae8d6-7da3-4624-ad30-82ec2dd950fe'

  await Promise.all([
    copyExtraFiles(__dirname),

    createReadme({
      template: resolve(templateFolder, 'README.md'),
      replacements: {
        portName,
        version,
        previewURL,
      },
    }),
  ])
}
