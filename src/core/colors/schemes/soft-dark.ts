import {
  commonSoftSyntaxHighlighting,
  commonSyntaxHighlighting,
  commonSoftUI,
  commonUI,
} from './common'

export const softDark = {
  ...commonSyntaxHighlighting,
  ...commonUI,
  // UI
  accent11: '#141414',
  accent12: '#21202e',
  accent13: '#444444',
  accent21: '#1c1b22',
  accent24: '#1f1a27',
}

export const softDarkSoft = {
  ...commonSoftSyntaxHighlighting,
  ...commonSoftUI,
  // UI
  accent11: softDark.accent11,
  accent12: softDark.accent12,
  accent13: softDark.accent13,
  accent21: softDark.accent21,
  accent24: softDark.accent24,
}
