const {
  tokenColors,
} = require('../../../../templates/vscode/syntax-highlighting')

module.exports = (colors) => {
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
