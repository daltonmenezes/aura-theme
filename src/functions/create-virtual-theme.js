const { tokenColors } = require('../templates/syntax-highlighting')
const { colors: ui } = require('../templates/ui')

function updateTokenColorsFromReplacementKeys(colors) {
  return tokenColors.map((current) => {
    const replacementKey = current.settings.foreground || ''
    const hasColorReplacement = replacementKey.startsWith('$')

    return hasColorReplacement
      ? {
          ...current,
          settings: {
            foreground: colors[replacementKey],
          },
        }
      : current
  })
}

function updateUIColorsFromReplacementKeys(colors) {
  return Object.entries(ui).reduce((acc, current) => {
    const [key, value = ''] = current
    const hasColorReplacement = value.startsWith('$')

    return (acc = hasColorReplacement
      ? {
          ...acc,
          [key]: colors[value],
        }
      : { ...acc, [key]: value })
  }, {})
}

module.exports = function createVirtualTheme({ name, type, colors }) {
  const tokenFragment = updateTokenColorsFromReplacementKeys(colors)
  const uiFragment = updateUIColorsFromReplacementKeys(colors)

  return {
    name,
    type,
    colors: uiFragment,
    tokenColors: tokenFragment,
  }
}
