import { colorsService, functionCompositionService } from 'services'

const { shade, desaturate } = colorsService()
const { compose } = functionCompositionService()
const shadeAndDesaturate = compose(shade(0.2), desaturate(0.1))

const commonColors = {
  accent0: '#0f0f0f',
  accent1: '#a277ff',
  accent2: '#61ffca',
  accent3: '#ffca85',
  accent4: '#9dff65',
  accent5: '#ff6767',
  accent6: '#f694ff',
  accent7: '#edecee', // foreground
  accent8: '#6d6d6d', // comments
  accent31: '#ffca85',
  accent32: '#82e2ff',
  accent33: '#24222c',
  accent34: '#00000000', // fully transparent,
  accent35: '#525156', // activity bar inactive foreground,
}

export const commonUI = {
  accent9: '#cdccce',
  accent10: '#adacae',
  accent13: '#2d2d2d',
  accent14: '#af8aff7f',
  accent15: '#4d4d4d',
  accent16: '#ffffff00',
  accent17: '#a394f033', // secondary-selection
  accent18: '#a394f000',
  accent19: '#3ea7847f',
  accent20: '#3d375e7f', // primary-selection
  accent22: '#4d466e',
  accent23: '#3b334b',
  accent25: '#49c29a',
  accent26: '#00d89023',
  accent27: '#ff474720',
  accent28: '#121016',
  accent29: '#000000',
  accent30: '#2d2b38',
  accent33: '#2e2b38',
  accent36: '#a19c77', // debugging background
  accent37: '#353424', // breakpoint frame highlight
  accent38: '#29263c', // primary-selection without alpha
}

export const commonSoftUI = {
  ...commonUI,
  accent9: '#b4b4b4',
}

export const commonSyntaxHighlighting = commonColors

export const commonSoftSyntaxHighlighting = {
  ...commonSyntaxHighlighting,
  accent1: shadeAndDesaturate(commonColors.accent1),
  accent2: shadeAndDesaturate(commonColors.accent2),
  accent3: shadeAndDesaturate(commonColors.accent3),
  accent4: shadeAndDesaturate(commonColors.accent4),
  accent5: shadeAndDesaturate(commonColors.accent5),
  accent6: shadeAndDesaturate(commonColors.accent6),
  accent7: shadeAndDesaturate(commonColors.accent7),
  accent31: shadeAndDesaturate(commonColors.accent31),
  accent32: shadeAndDesaturate(commonColors.accent32),
}
