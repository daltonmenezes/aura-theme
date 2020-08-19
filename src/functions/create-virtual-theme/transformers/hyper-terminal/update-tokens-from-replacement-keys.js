const { readFileSync } = require('fs')
const { resolve } = require('path')

const templateFromFile = String(
  readFileSync(
    resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'templates',
      'hyper-terminal',
      'index.js'
    )
  )
)

module.exports = (colors) => {
  let template = templateFromFile

  for ([key, value] of Object.entries(colors)) {
    template = template.replace(new RegExp(`'\\${key}'`, 'g'), `'${value}'`)
  }

  return template
}
