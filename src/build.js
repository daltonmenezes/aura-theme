const themes = require('./index')

const {
  generateFileName,
  createPackageJSON,
  createThemeFile,
  createContributesInfo,
} = require('./functions')

for (theme of themes) {
  createThemeFile(theme)
}

createPackageJSON({
  contributes: {
    themes: createContributesInfo(themes),
  },
})
