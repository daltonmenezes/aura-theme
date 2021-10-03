module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '{{ accent1 }}',
    cursorAccentColor: '{{ accent21 }}',
    foregroundColor: '{{ accent7 }}',
    backgroundColor: '{{ accent12 }}',
    selectionColor: '{{ accent17 }}',
    borderColor: '{{ accent0 }}',
    fontWeightBold: 'normal',
    colors: {
      black: '{{ accent21 }}',
      red: '{{ accent5 }}',
      green: '{{ accent2 }}',
      yellow: '{{ accent3 }}',
      blue: '{{ accent2 }}',
      magenta: '{{ accent1 }}',
      cyan: '{{ accent7 }}',
      white: '{{ accent7 }}',
      lightBlack: '{{ accent15 }}',
      lightRed: '{{ accent3 }}',
      lightGreen: '{{ accent1 }}',
      lightYellow: '{{ accent3 }}',
      lightBlue: '{{ accent1 }}',
      lightMagenta: '{{ accent1 }}',
      lightCyan: '{{ accent2 }}',
      lightWhite: '{{ accent7 }}',
    },
  })
}
