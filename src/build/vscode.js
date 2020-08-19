const { resolve } = require('path')
const themes = require('../themes/vscode')

const {
  createPackageJSON,
  createThemeFile,
  createVsCodeContributesInfo,
  generateFileName,
} = require('../functions')

const VSCODE_PACKAGE_PATH = resolve(__dirname, '..', '..', 'packages', 'vscode')

for (theme of themes) {
  createThemeFile({
    from: JSON.stringify(theme, null, 2),
    to: resolve(VSCODE_PACKAGE_PATH, 'themes', generateFileName(theme.name)),
  })
}

createPackageJSON({
  from: resolve(VSCODE_PACKAGE_PATH, 'package.json'),
  append: {
    contributes: {
      themes: createVsCodeContributesInfo(themes),
    },
  },
})
