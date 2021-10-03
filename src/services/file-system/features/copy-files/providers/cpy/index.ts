import { CopyFilesServiceProvider } from 'core/@types/services/file-system'
import copy from 'cpy'

export function cpyProvider(): CopyFilesServiceProvider {
  return {
    copy,
  }
}
