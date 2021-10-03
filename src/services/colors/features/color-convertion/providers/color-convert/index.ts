import { ColorConvertionServiceProvider } from 'core/@types/services/color'
import color from 'color-convert'

export function colorConvertProvider(): ColorConvertionServiceProvider {
  return {
    hexToRgb: color.hex.rgb,
    rgbToHex: (rgb) => `#${color.rgb.hex(rgb)}`,
  }
}
