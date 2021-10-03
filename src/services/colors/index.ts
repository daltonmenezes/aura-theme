import {
  colorAdjustmentsService,
  colorConvertionService,
  terminalConvertionService,
} from './features'

import { ColorsServiceProvider } from 'core/@types/services/color'

export function colorsService(): ColorsServiceProvider {
  return {
    ...colorAdjustmentsService(),
    ...colorConvertionService(),
    ...terminalConvertionService(),
  }
}
