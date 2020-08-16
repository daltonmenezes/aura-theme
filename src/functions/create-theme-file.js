const { resolve } = require('path')
const { writeFileSync } = require('fs')
const generateFileName = require('./generate-file-name')

module.exports = (theme) => {
  const filename = generateFileName(theme.name)

  try {
    writeFileSync(
      resolve(__dirname, '..', '..', 'themes', filename),
      JSON.stringify(theme, null, 2)
    )
  } catch {
    throw Error(`
      Something went wrong.
        There was a problem creating the ${filename} file.
    `)
  }
}
