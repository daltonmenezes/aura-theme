import { isDev } from '../constants'

/**
 * Used to get a path in the provided object for the current platform in development.
 *
 * If the platform doesn't exist in the provided object, an empty string will be returned.
 *
 * @param  {Record<string, string>} pathsPerPlatform - An object with paths per platform id and their values
 * @returns {String} String
 * @example
 * getPathByPlatformInDev({ darwin: '/some/path', linux: '/other/path' }); // '/some/path'
 */

export function getPathByPlatformInDev(
  pathsPerPlatform: Record<string, string>
): string {
  const platform = process.platform as keyof typeof pathsPerPlatform
  const outputDist = isDev ? pathsPerPlatform[platform] : ''

  return outputDist
}
