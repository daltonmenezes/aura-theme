const {
  createVirtualTheme,
  sassToJS,
  readStyleFile,
} = require('../../functions')

module.exports = createVirtualTheme({
  transformer: 'vscode',
  name: 'Aura Dark',
  type: 'dark',
  colors: sassToJS(readStyleFile('aura-dark')),
})
