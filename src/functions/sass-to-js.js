module.exports = (style) => {
  const serializedStyle = style
    .trim()
    .replace(/\/\/.+/g, '')
    .replace(/\/\/.+|(\/\*).*(\*\/)/gms, '')
    .replace(/\$(.*):/g, '"$$$1":')
    .replace(/:\s(.*)/g, ': "$1",')
    .slice(0, -1)

  return JSON.parse(`{${serializedStyle}}`)
}
