import { ReadFileServiceProvider } from 'core/@types/services/file-system'
import { readFile } from 'fs/promises'

export function fsProvider(): ReadFileServiceProvider {
  return {
    readFile: async (path, options = { encoding: 'utf8' }) =>
      readFile(path, options),
  }
}
