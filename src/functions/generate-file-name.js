module.exports = (name) => {
  const theme = name.toLowerCase().replace(/\s+/g, '-')

  return `${theme}-color-theme.json`
}
