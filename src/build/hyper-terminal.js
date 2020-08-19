const { resolve } = require('path')
const theme = require('../themes/hyper-terminal')

const { createThemeFile } = require('../functions')

const HYPER_PACKAGE_PATH = resolve(
  __dirname,
  '..',
  '..',
  'packages',
  'hyper-terminal'
)

createThemeFile({
  from: theme,
  to: resolve(HYPER_PACKAGE_PATH, 'index.js'),
})
