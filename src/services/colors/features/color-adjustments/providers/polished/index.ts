import { ColorAdjustmentsServiceProvider } from 'core/@types/services/color'
import { desaturate, shade } from 'polished'

export function polishedProvider(): ColorAdjustmentsServiceProvider {
  return {
    shade: (percentage: string | number) => shade(percentage),
    desaturate: (amount: string | number) => desaturate(amount),
  }
}
