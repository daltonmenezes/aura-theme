const { requireAll } = require('../../functions')
const { resolve } = require('path')

module.exports = requireAll(resolve(__dirname), {
  ignore: ['index.js'],
})
