import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function TabbyPort(Aura: AuraAPI) {
  const { createPort, createReadme } = Aura
  const templateFolder = resolve(__dirname, 'templates')

  const portName = 'Tabby'
  const version = '1.0.0'

  const theme_name = 'Aura-Theme'
  const foreground_color = '#edecee'
  const background_color = '#21202e'
  const cursor_color = '#a277ff'
  const cursor_accent_color = ''
  const color_001 = '#110f18'
  const color_002 = '#f694ff'
  const color_003 = '#f694ff00'
  const color_004 = '#ffca85'
  const color_005 = '#a277ff'
  const color_006 = '#ffca85'
  const color_007 = '#ffca85'
  const color_008 = '#d0d0d0'
  const color_009 = '#4d4d4d'
  const color_010 = '#ffca85'
  const color_011 = '#61ffca'
  const color_012 = '#ffca85'
  const color_013 = '#a277ff'
  const color_014 = '#ffca85'
  const color_015 = '#61ffca'
  const color_016 = '#edecee'

  await createPort({
    template: resolve(templateFolder, 'tabby-colors.yaml'),
    replacements: {
      theme_name,
      foreground_color,
      background_color,
      cursor_color,
      cursor_accent_color,
      color_001,
      color_002,
      color_003,
      color_004,
      color_005,
      color_006,
      color_007,
      color_008,
      color_009,
      color_010,
      color_011,
      color_012,
      color_013,
      color_014,
      color_015,
      color_016,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
