import { schemeToTerminalRgb } from './scheme-to-terminal-rgb'
import { colorsService } from 'services/colors'
import { schemeToRgb } from './scheme-to-rgb'
import { tokenize } from './tokenize'

export const colorHandlers = {
  schemeToTerminalRgb,
  schemeToRgb,
  tokenize,
  ...colorsService(),
}
