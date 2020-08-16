const { readFileSync } = require('fs')
const { resolve } = require('path')

module.exports = (file) => {
  return String(
    readFileSync(resolve(__dirname, '..', 'colors', `${file}.sass`))
  )
}
