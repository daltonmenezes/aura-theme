import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function CodeSandboxPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const { info, folders } = constants

  const portName = 'CodeSandbox'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-code-sandbox-preview.png?raw=true`
  const templateFolder = resolve(__dirname, 'templates')
  const outputDist = resolve(folders.distFolder, 'code-sandbox', 'themes')

  await createPort({
    outputDist,
    template: resolve(templateFolder, `theme.json`),
    outputFileName: 'aura-dark',
    replacements: colorSchemes.dark,
  })

  await createPort({
    outputDist,
    template: resolve(templateFolder, `theme.json`),
    outputFileName: 'aura-dark-soft-text',
    replacements: colorSchemes.darkSoft,
  })

  await createPort({
    outputDist,
    template: resolve(templateFolder, `theme.json`),
    outputFileName: 'aura-soft-dark',
    replacements: colorSchemes.softDark,
  })

  await createPort({
    outputDist,
    template: resolve(templateFolder, `theme.json`),
    outputFileName: 'aura-soft-dark-soft-text',
    replacements: colorSchemes.softDarkSoft,
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
