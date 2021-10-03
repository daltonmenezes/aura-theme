import { FileStatusServiceProvider } from 'core/@types/services/file-system'
import { fsProvider } from './providers/fs'

export function fileStatusService(): FileStatusServiceProvider {
  return fsProvider()
}
