import { ColorAdjustmentsServiceProvider } from 'core/@types/services/color'
import { polishedProvider } from './providers/polished'

export function colorAdjustmentsService(): ColorAdjustmentsServiceProvider {
  return polishedProvider()
}
