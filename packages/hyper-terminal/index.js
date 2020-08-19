module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '#9d7de0',
    cursorAccentColor: '#161616',
    foregroundColor: '#dbdbdb',
    backgroundColor: '#1c1b22',
    selectionColor: '#a394f033',
    borderColor: '#0f0f0f',
    fontWeightBold: 'normal',
    colors: {
      black: '#161616',
      red: '#d46a6a',
      green: '#67c9a8',
      yellow: '#d8c56f',
      blue: '#67c9a8',
      magenta: '#9d7de0',
      cyan: '#dbdbdb',
      white: '#dbdbdb',
      lightBlack: '#4d4d4d',
      lightRed: '#d8c56f',
      lightGreen: '#9d7de0',
      lightYellow: '#d8c56f',
      lightBlue: '#9d7de0',
      lightMagenta: '#9d7de0',
      lightCyan: '#67c9a8',
      lightWhite: '#dbdbdb',
    },
  })
}
