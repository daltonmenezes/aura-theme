import { fileSystemService } from 'services/file-system'
import { templateEngineService } from 'services'
import { toPortName } from 'shared/utils'
import { resolve } from 'path'
import { log } from 'core/cli/utils'
import { cli } from 'core/cli/constants'

export async function makePort(portName: string) {
  if (!portName) {
    log.error(`Port name is required!`)
  }

  const { readDir, readFile, writeFile, copy } = fileSystemService()
  const { render } = templateEngineService()
  const folders = await readDir(cli.srcPortsFolder)
  const portAlreadyExists = folders.includes(portName)

  if (portAlreadyExists) {
    return log.error(`a port named as "${portName}" already exists.`)
  }

  log.starting(`to create the ${portName} port`)

  const templateFolder = resolve(cli.portModuleTemplatesFolder)

  const indexPortFile = resolve(
    templateFolder,
    cli.portModuleMainTemplateFile
  )

  const readmeFile = resolve(
    templateFolder,
    cli.portModuleReadmeTemplateFile
  )

  const indexFileContent = await readFile(indexPortFile)
  const portsFolder = resolve(cli.srcPortsFolder, portName)

  const preCompiledIndexFile = render(indexFileContent, {
    portName: toPortName(portName),
  })

  await copy(readmeFile, resolve(portsFolder, 'templates'))
  await writeFile(resolve(portsFolder, 'index.ts'), preCompiledIndexFile)

  log.tip(`now, to start the development of the ${portName} port,`)
  log.message(`execute: yarn dev only ${portName}\n`, 6)
}
