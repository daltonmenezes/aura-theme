const { resolve } = require('path')
const { writeFileSync } = require('fs')
const packageJSON = require('../../package.json')

module.exports = (toAppend) => {
  try {
    const serializedPackageJSON = {
      ...packageJSON,
      ...toAppend,
    }

    writeFileSync(
      resolve(__dirname, '..', '..', 'package.json'),
      JSON.stringify(serializedPackageJSON, null, 2)
    )
  } catch {
    throw Error(`
      Something went wrong.
        There was a problem creating the package.json file
    `)
  }
}
