import { UnlinkServiceProvider } from 'core/@types/services/file-system'
import { rimrafProvider } from './providers/rimraf'

export function unlinkService(): UnlinkServiceProvider {
  return rimrafProvider()
}
