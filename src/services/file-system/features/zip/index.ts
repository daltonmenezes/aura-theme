import { ZipServiceProvider } from 'core/@types/services/file-system'
import { admZipProvider } from './providers/adm-zip'
import { zipAFolderProvider } from './providers/zip-a-folder'

export function zipService(): ZipServiceProvider {
  return {
    zip: {
      ...admZipProvider(),
      zipFolder: zipAFolderProvider(),
    },
  }
}
