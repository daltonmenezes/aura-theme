import { CopyFilesServiceProvider } from 'core/@types/services/file-system'
import { cpyProvider } from './providers/cpy'

export function copyFilesService(): CopyFilesServiceProvider {
  return cpyProvider()
}
