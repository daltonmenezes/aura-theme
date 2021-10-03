import { FunctionCompositionServiceProvider } from 'core/@types/services/function-composition'
import { compose } from 'ramda'

export function ramdaProvider(): FunctionCompositionServiceProvider {
  return {
    compose,
  }
}
