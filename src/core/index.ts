import * as colors from './colors'
import * as modules from './modules'
import * as utils from 'shared/utils'
import * as constants from 'shared/constants'

export type AuraAPI = Omit<typeof Aura, 'loader'>

export const Aura = {
  ...utils,
  ...modules,
  ...colors,
  constants,
}
