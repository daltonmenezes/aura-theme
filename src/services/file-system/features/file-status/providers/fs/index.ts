import { FileStatusServiceProvider } from 'core/@types/services/file-system'
import { stat as fileStatus } from 'fs/promises'

export function fsProvider(): FileStatusServiceProvider {
  return {
    fileStatus,
  }
}
