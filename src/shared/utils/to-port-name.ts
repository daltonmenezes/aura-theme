import { capitalizeFirstLetter, toCamelCase } from '.'

/**
 * Used to convert a string to a valid port name *(PascalCase)*.
 *
 * @param  {String} name - The name of the port separated by hiphens
 * @returns {String} String
 * @example
 * toPortName('aura-theme'); // 'AuraTheme'
 */

export function toPortName(name: string): string {
  const portName = capitalizeFirstLetter(toCamelCase(name, '-'))
  const sanitizedPortName = portName.replace(/\W/g, '')

  return sanitizedPortName
}
