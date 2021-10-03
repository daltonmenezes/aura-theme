import { TerminalConvertionServiceProvider } from 'core/@types/services/color'
import { termColorsProvider } from './providers/termcolors'

export function terminalConvertionService(): TerminalConvertionServiceProvider {
  return termColorsProvider()
}
