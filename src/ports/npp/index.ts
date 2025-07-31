import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function NotepadPlusPlusPort(Aura: AuraAPI) {
  const {
    createReadme,
    colorSchemes,
    constants,
    createInMemoryPort,
    createFromInMemoryPort,
  } = Aura

  const { info, folders } = constants

  const portName = 'Notepad++'
  const version = '1.0.0'
  const templateFolder = resolve(__dirname, 'templates')
  const outputDist = resolve(folders.distFolder, 'npp')
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-npp-preview.png?raw=true`

  const removeHashFromColors = (template: string) =>
    template.replace(/#([A-Fa-f0-9]{6})/g, '$1')

  const names = {
    auraDark: `${info.shortName} Dark`,
    auraDarkSoftText: `${info.shortName} Dark (Soft Text)`,
    auraSoftDark: `${info.shortName} Soft Dark`,
    auraSoftDarkSoftText: `${info.shortName} Soft Dark (Soft Text)`,
  }

  async function createCleanTheme(
    scheme: any,
    outputFileName: string,
    name: string
  ) {
    const initialTemplate = await createInMemoryPort({
      template: resolve(templateFolder, 'theme.xml'),
      replacements: {
        ...scheme,
        ...info,
        name,
      },
    })

    const cleanTemplate = removeHashFromColors(initialTemplate)

    return createFromInMemoryPort({
      template: cleanTemplate,
      output: resolve(outputDist, `${outputFileName}.xml`),
    })
  }

  await Promise.all([
    createCleanTheme(colorSchemes.dark, `${info.slug}-dark`, names.auraDark),

    createCleanTheme(
      colorSchemes.darkSoft,
      `${info.slug}-dark-soft-text`,
      names.auraDarkSoftText
    ),

    createCleanTheme(
      colorSchemes.softDark,
      `${info.slug}-soft-dark`,
      names.auraSoftDark
    ),

    createCleanTheme(
      colorSchemes.softDarkSoft,
      `${info.slug}-soft-dark-soft-text`,
      names.auraSoftDarkSoftText
    ),

    createReadme({
      template: resolve(templateFolder, 'README.md'),
      replacements: {
        ...info,
        portName,
        version,
        previewURL,
      },
    }),
  ])
}
