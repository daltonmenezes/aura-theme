import { ReadFileServiceProvider } from 'core/@types/services/file-system'
import { fsProvider } from './providers/fs'

export function readFileService(): ReadFileServiceProvider {
  return fsProvider()
}
