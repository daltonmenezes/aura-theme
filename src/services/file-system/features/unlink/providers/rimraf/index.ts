import { UnlinkServiceProvider } from 'core/@types/services/file-system'
import { promisify } from 'util'
import rimraf from 'rimraf'

const asyncRimraf = promisify(rimraf)

export function rimrafProvider(): UnlinkServiceProvider {
  return {
    async unlink(path) {
      await asyncRimraf(path)
    },
  }
}
