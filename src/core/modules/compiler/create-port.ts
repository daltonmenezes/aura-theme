import {
  templateEngineService,
  fileSystemService,
  debugService,
} from 'services'

import { emojis } from 'shared/constants'
import { sep as separator, basename } from 'path'
import { createPortFile } from './create-port-file'

/**
 * Used to create a port file in disk from a given template file path.
 *
 * @async
 * @param  {PortCompiler} props
 * @returns {Promise<void>} void
 * @example
 * await createPort({
 *   template: resolve(templateFolder, `aura-theme.js`),
 *   replacements: colorSchemes.dark,
 * });
 */

export async function createPort(props: PortCompiler): Promise<void> {
  const { template, replacements, outputFileName, showDebugLogs } = props
  const { readFile } = fileSystemService()
  const templateEngine = templateEngineService()
  const templateFile = await readFile(template)
  const templateFileName = basename(template)
  const templateRootFolder = template.split(separator).reverse()[2]

  const debug = debugService('create-port', templateRootFolder)

  debug(`${emojis.dna} compiling ${templateFileName}`, showDebugLogs)

  const preCompiledPort = templateEngine.render(templateFile, replacements)

  const fileName = outputFileName
    ? `${outputFileName}.${templateFileName.split('.')[1]}`
    : templateFileName

  await createPortFile({
    fileName,
    templateRootFolder,
    template: preCompiledPort,
    outputDist: props.outputDist,
  })

  debug(`${emojis.shine} done!`, showDebugLogs)
}
