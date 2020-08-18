const {
  createVirtualTheme,
  sassToJS,
  readStyleFile,
} = require('../../functions')

module.exports = createVirtualTheme({
  name: 'Aura Dark Soft Text',
  type: 'dark',
  colors: sassToJS(readStyleFile('aura-dark-soft-text')),
})
