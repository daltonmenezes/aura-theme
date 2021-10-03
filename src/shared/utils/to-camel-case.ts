/**
 * Used to transform a string to camel-case.
 *
 * @param  {String} str - A string to be converted to camel-case
 * @param  {String} separator - The separator to be used to split the string and apply the camel-case transformation
 * @returns {String} String
 * @example
 * toCamelCase('aura-theme', '-'); // 'auraTheme'
 */

export function toCamelCase(str: string, separator: string): string {
  return separator
    ? str
        .toLowerCase()
        .replace(
          new RegExp(`(${separator})*(${separator}.{1})`, 'g'),
          (char) => char.toUpperCase().substr(1)
        )
    : str
}
