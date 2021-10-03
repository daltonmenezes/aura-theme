import { ZipServiceProvider } from 'core/@types/services/file-system'
import Zip from 'adm-zip'

type ZipProvider = Pick<ZipServiceProvider['zip'], 'addFile' | 'writeZip'>

export function admZipProvider(): ZipProvider {
  let zip = new Zip()

  return {
    addFile: (path) => zip.addLocalFile(path),
    writeZip: (path) => {
      zip.writeZip(path)
      zip = new Zip()
    },
  }
}
