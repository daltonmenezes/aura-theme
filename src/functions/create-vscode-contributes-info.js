const generateFileName = require('./generate-file-name')

module.exports = (themes) => {
  return themes.map(({ name, type }) => {
    const themeType = type.toLowerCase() === 'dark' ? 'vs-dark' : 'vs'

    return {
      label: name,
      uiTheme: themeType,
      path: `./themes/${generateFileName(name)}`,
    }
  })
}
