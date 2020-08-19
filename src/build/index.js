const { requireAll } = require('../functions')
const { resolve } = require('path')

requireAll(resolve(__dirname), {
  ignore: ['index.js'],
})
