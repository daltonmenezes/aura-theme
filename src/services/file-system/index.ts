import { FileSystemServiceProvider } from 'core/@types/services/file-system'

import {
  copyFilesService,
  writeFileService,
  readFileService,
  readDirService,
  fileStatusService,
  zipService,
  unlinkService,
} from './features'

export function fileSystemService(): FileSystemServiceProvider {
  return {
    ...copyFilesService(),
    ...writeFileService(),
    ...readFileService(),
    ...readDirService(),
    ...fileStatusService(),
    ...zipService(),
    ...unlinkService(),
  }
}
