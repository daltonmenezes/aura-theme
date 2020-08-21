const { resolve } = require('path')
const theme = require('../themes/insomnia')

const { createThemeFile } = require('../functions')

const INSOMNIA_PACKAGE_PATH = resolve(
  __dirname,
  '..',
  '..',
  'packages',
  'insomnia'
)

createThemeFile({
  from: theme,
  to: resolve(INSOMNIA_PACKAGE_PATH, 'index.js'),
})
