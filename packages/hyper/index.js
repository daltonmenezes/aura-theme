module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '#a277ff',
    cursorAccentColor: '#110f18',
    foregroundColor: '#edecee',
    backgroundColor: '#15141b',
    selectionColor: '#a394f033',
    borderColor: '#0f0f0f',
    fontWeightBold: 'normal',
    colors: {
      black: '#110f18',
      red: '#ff6767',
      green: '#61ffca',
      yellow: '#ffca85',
      blue: '#61ffca',
      magenta: '#a277ff',
      cyan: '#edecee',
      white: '#edecee',
      lightBlack: '#4d4d4d',
      lightRed: '#ffca85',
      lightGreen: '#a277ff',
      lightYellow: '#ffca85',
      lightBlue: '#a277ff',
      lightMagenta: '#a277ff',
      lightCyan: '#61ffca',
      lightWhite: '#edecee',
    },
  })
}
