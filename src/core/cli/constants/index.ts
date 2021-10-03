import { resolve } from 'path'
import { folders } from 'shared/constants'

export const cli = {
  commandToCleanSpecificPort: `yarn clean packages`,
  commandToCleanAllPorts: `yarn clean:packages`,
  commandToAllowSpecificPorts: 'only',
  srcPortsFolder: folders.portsFolder,
  portModuleMainTemplateFile: 'index.template',
  portModuleReadmeTemplateFile: 'README.md',
  portModuleTemplatesFolder: resolve(
    'src',
    'core',
    'cli',
    'templates',
    'port'
  ),
}
