const { createVirtualTheme, sassToJS, readStyleFile } = require('../functions')

module.exports = createVirtualTheme({
  name: 'Aura Soft Dark Soft Text',
  type: 'dark',
  colors: sassToJS(readStyleFile('aura-soft-dark-soft-text')),
})
