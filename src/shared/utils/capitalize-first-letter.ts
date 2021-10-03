/**
 * Used to capitalize only the first letter in a given text.
 * @param  {String} rawText - A string to capitalize the first letter
 * @returns {String} String
 * @example
 * capitalizeFirstLetter('aura theme'); // 'Aura theme'
 */

export function capitalizeFirstLetter(rawText: string): string {
  const word = [...rawText]

  word[0] = word[0].toUpperCase()

  const formatedPortName = word.join('')

  return formatedPortName
}
