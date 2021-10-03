import { resolve } from 'path'
import { createPort } from '..'
import { getAllFiles } from 'core/modules/file-system/get-all-files'
import { debugService } from 'services'
import { emojis, folders } from 'shared/constants'
import { joinReplacements } from './join-replacements'

/**
 * Used to create a README.md in disk from a given template file path.
 *
 * The values at "theme" property in the root "package.json" file will be injected by default to also fill the template.
 *
 * @async
 * @param  {DocumentCompiler} props
 * @returns {Promise<void>} void
 * @example
 * await createReadme({
 *   template: resolve('path', 'to', 'README.md'),
 *   replacements: {
 *     portName: 'Visual Studio Code',
 *   },
 * });
 */

export async function createReadme(props: DocumentCompiler): Promise<void> {
  const [portName] = props.template
    .replace(`${folders.portsFolder}/`, '')
    .split('/')

  const debug = debugService('create-readme', portName)

  debug(`${emojis.dna} compiling README.md`)

  const sharedTemplateFolder = resolve(
    'src',
    folders.sharedFolder,
    'templates',
    'readmes'
  )

  const documentsPath = await getAllFiles(sharedTemplateFolder)

  for (const documentPath of documentsPath) {
    await joinReplacements(documentPath, props)
  }

  await createPort({ ...props, showDebugLogs: false })

  debug(`${emojis.shine} done!`)
}
