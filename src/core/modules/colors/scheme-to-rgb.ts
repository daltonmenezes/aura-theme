import { colorsService } from 'services'

/**
 * Used to convert the values of a hex color scheme to RGB.
 * @param  {Record<string, unknown>} colors - A hex color scheme object
 * @returns {Record<string, unknown>} rgb_scheme
 * @example
 * schemeToRgb(colorSchemes.dark);
 * // { accent1: [162, 119, 255], accent2: [97, 255, 202], ... }
 */

export function schemeToRgb(
  colors: Record<string, unknown>
): Record<string, unknown> {
  const { hexToRgb } = colorsService()

  const rgb = Object.entries(colors).reduce((acc, current) => {
    const [key, color] = current
    const rgb = hexToRgb(String(color))

    Object.assign(acc, {
      [key]: rgb,
    })

    return acc
  }, {})

  return rgb
}
