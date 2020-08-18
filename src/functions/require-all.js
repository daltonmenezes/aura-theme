const { readdirSync } = require('fs')

module.exports = (path, { ignore }) => {
  let files = readdirSync(path)

  if (ignore) {
    files = files.filter((file) => !file.includes(ignore))
  }

  return files.map((file) => require(`${path}/${file}`))
}
