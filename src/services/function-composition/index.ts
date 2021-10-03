import { FunctionCompositionServiceProvider } from 'core/@types/services/function-composition'
import { ramdaProvider } from './providers/ramda'

export function functionCompositionService(): FunctionCompositionServiceProvider {
  return ramdaProvider()
}
