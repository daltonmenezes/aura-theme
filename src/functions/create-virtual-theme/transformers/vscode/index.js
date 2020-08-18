const updateTokensFromReplacementKeys = require('./update-tokens-from-replacement-keys')
const updateUIFromReplacementKeys = require('./update-ui-from-replacement-keys')

module.exports = ({ name, type, colors }) => {
  const tokenFragment = updateTokensFromReplacementKeys(colors)
  const uiFragment = updateUIFromReplacementKeys(colors)

  return {
    name,
    type,
    colors: uiFragment,
    tokenColors: tokenFragment,
  }
}
