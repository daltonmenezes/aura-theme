const {
  createVirtualTheme,
  sassToJS,
  readStyleFile,
} = require('../../functions')

module.exports = createVirtualTheme({
  transformer: 'insomnia',
  colors: sassToJS(readStyleFile('aura-dark-soft-text')),
})
