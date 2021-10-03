import { WriteFileServiceProvider } from 'core/@types/services/file-system'
import { fsExtraProvider } from './providers/fs-extra'

export function writeFileService(): WriteFileServiceProvider {
  return fsExtraProvider()
}
