import { TerminalConvertionServiceProvider } from 'core/@types/services/color'
import termColors from 'termcolors'

export function termColorsProvider(): TerminalConvertionServiceProvider {
  return {
    terminalConvertion: termColors,
  }
}
