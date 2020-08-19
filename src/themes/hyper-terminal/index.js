const {
  createVirtualTheme,
  sassToJS,
  readStyleFile,
} = require('../../functions')

module.exports = createVirtualTheme({
  transformer: 'hyper-terminal',
  colors: sassToJS(readStyleFile('aura-dark-soft-text')),
})
