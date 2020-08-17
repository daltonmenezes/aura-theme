const { writeFileSync } = require('fs')

module.exports = ({ from, to, append }) => {
  try {
    const packageBase = from ? require(from) : {}
    const output = to ? to : from

    const serializedPackageJSON = {
      ...packageBase,
      ...append,
    }

    writeFileSync(output, JSON.stringify(serializedPackageJSON, null, 2))
  } catch {
    throw Error(`
      Something went wrong.
        There was a problem creating the package.json file
    `)
  }
}
