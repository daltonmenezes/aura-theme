import { ReadDirServiceProvider } from 'core/@types/services/file-system'
import { fsProvider } from './providers/fs'

export function readDirService(): ReadDirServiceProvider {
  return fsProvider()
}
