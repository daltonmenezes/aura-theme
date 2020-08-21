const { colors: ui } = require('../../templates/vscode/ui')

module.exports = (colors) => {
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
