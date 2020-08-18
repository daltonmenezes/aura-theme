const { writeFileSync } = require('fs')

module.exports = ({ from: theme, to: output }) => {
  try {
    writeFileSync(output, JSON.stringify(theme, null, 2))
  } catch {
    throw Error(`
      Something went wrong.
        There was a problem creating the ${output} file.
    `)
  }
}
