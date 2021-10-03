import { colorsService } from 'services'

/**
 * Used to convert the values of a hex color scheme to RGB scheme compatible with iTerm.
 * @param  {Record<string, unknown>} colors - A hex color scheme object
 * @returns {Record<string, unknown>} rgb_terminal_scheme
 * @example
 * schemeToTerminalRgb(colorSchemes.dark);
 * /*
 * {
      accent1_red: 0.6352941176470588,
      accent1_green: 0.4666666666666667,
      accent1_blue: 1,
      accent2_red: 0.3803921568627451,
      accent2_green: 1,
      accent2_blue: 0.792156862745098,
    }
 */

export function schemeToTerminalRgb(
  colors: Record<string, unknown>
): Record<string, unknown> {
  const { hexToRgb } = colorsService()

  const terminalColors = Object.entries(colors).reduce((acc, current) => {
    const [key, color] = current
    const [red, green, blue] = hexToRgb(String(color))

    Object.assign(acc, {
      [`${key}_red`]: Number.parseFloat(String(red)) / 255,
      [`${key}_green`]: Number.parseFloat(String(green)) / 255,
      [`${key}_blue`]: Number.parseFloat(String(blue)) / 255,
    })

    return acc
  }, {})

  return terminalColors
}
