import { AuraAPI } from 'core'
import { resolve } from 'path'
import { fileSystemService } from 'services'
import { allowedPorts } from './allowed-ports'
import * as constants from 'shared/constants'

export async function loader(Aura: AuraAPI) {
  const { readDir } = fileSystemService()
  const folders = await readDir(constants.folders.portsFolder)
  const allowedPortList = allowedPorts(folders)

  const sanitizedAllowedPortList = allowedPortList.filter(
    (file) =>
      !constants.files.blackListedFiles.find((blackListedFile) =>
        file.includes(blackListedFile)
      )
  )

  for (const portFolderName of sanitizedAllowedPortList) {
    const portPath = resolve(constants.folders.portsFolder, portFolderName)
    const portModule = await import(portPath)
    const [key] = Object.keys(portModule)

    const loadPort = portModule[key]

    await loadPort(Aura)
  }
}
