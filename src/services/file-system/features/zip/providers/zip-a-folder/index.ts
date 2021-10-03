import { ZipServiceProvider } from 'core/@types/services/file-system'
import { zip } from 'zip-a-folder'

export function zipAFolderProvider(): ZipServiceProvider['zip']['zipFolder'] {
  return zip
}
