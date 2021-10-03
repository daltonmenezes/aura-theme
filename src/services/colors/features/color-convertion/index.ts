import { ColorConvertionServiceProvider } from 'core/@types/services/color'
import { colorConvertProvider } from './providers/color-convert'

export function colorConvertionService(): ColorConvertionServiceProvider {
  return colorConvertProvider()
}
