import { CopyFilesServiceProvider } from 'core/@types/services/file-system'
import copy from 'cpy'
import fetch from 'node-fetch'

export function cpyProvider(): CopyFilesServiceProvider {
  return {
    copy,
  }
}
