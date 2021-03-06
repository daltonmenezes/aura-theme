const {
  createVirtualTheme,
  sassToJS,
  readStyleFile,
} = require('../../functions')

module.exports = createVirtualTheme({
  transformer: 'vscode',
  name: 'Aura Dark Plus Soft Text',
  type: 'dark',
  colors: sassToJS(readStyleFile('aura-dark-plus-soft-text')),
})
