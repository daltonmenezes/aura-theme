import {
  commonSyntaxHighlighting,
  commonSoftSyntaxHighlighting,
  commonSoftUI,
  commonUI,
} from './common'

export const dark = {
  ...commonSyntaxHighlighting,
  ...commonUI,
  // UI
  accent11: '#000000',
  accent12: '#15141b', // background
  accent21: '#110f18',
  accent24: '#121016',
}

export const darkSoft = {
  ...commonSoftSyntaxHighlighting,
  ...commonSoftUI,
  // UI
  accent11: dark.accent11,
  accent12: dark.accent12,
  accent13: '#2d2d2d',
  accent21: dark.accent21,
  accent24: dark.accent24,
}
