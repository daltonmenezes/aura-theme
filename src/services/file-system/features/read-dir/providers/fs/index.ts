import { ReadDirServiceProvider } from 'core/@types/services/file-system'
import { readdir as readDir } from 'fs/promises'

export function fsProvider(): ReadDirServiceProvider {
  return {
    readDir,
  }
}
