import { WriteFileServiceProvider } from 'core/@types/services/file-system'
import { outputFile } from 'fs-extra'

export function fsExtraProvider(): WriteFileServiceProvider {
  return {
    writeFile: outputFile,
  }
}
