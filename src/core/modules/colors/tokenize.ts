import { colorSchemes } from 'core/colors'

/**
 * Used to convert hex colors in a given string to Aura accent tokens.
 *
 * This is useful to convert the ports you are creating by hard coding the hex colors for testing to the tokenized port template version.
 *
 * @param  {String} content - A string containing hex colors to be replaced to their respective Aura accent tokens
 * @returns {String} tokenizedContent
 * @example
 * tokenize(`"activityBar.activeBorder": "#a277ff",`);
 * // "activityBar.activeBorder": "{{ accent1 }}",
 */

export function tokenize(content: string): string {
  const tokenizedContent = Object.entries(colorSchemes.dark).reduce(
    (acc, [key, value]) => {
      const captureHexColors = new RegExp(`${value}`, 'gi')

      acc = acc.replace(captureHexColors, `{{ ${key} }}`)

      return acc
    },
    content
  )

  return tokenizedContent
}
