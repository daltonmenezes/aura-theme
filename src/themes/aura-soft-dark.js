const { createVirtualTheme, sassToJS, readStyleFile } = require('../functions')

module.exports = createVirtualTheme({
  name: 'Aura Soft Dark',
  type: 'dark',
  colors: sassToJS(readStyleFile('aura-soft-dark')),
})
