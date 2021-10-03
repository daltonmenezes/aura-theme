import { emojis, files, folders } from 'shared/constants'
import { resolve, basename, parse } from 'path'
import { fileSystemService, debugService } from 'services'
import { getAllFiles } from '../file-system/get-all-files'

/**
 * Used to copy all files and folders inside a folder named as **"extra"** inside your port folder, keeping their structure.
 *
 * This is useful to add files in the dist version that you don't need to change their content dynamically at the build process.
 *
 * @async
 * @param  {String} portRootFolder - The root folder where the **"extra"** folder lives
 * @param  {String} [outputFolder=""] - The output folder where the files will be copied to, if not provided, the default port folder dist will be used
 * @return {Promise<void>} void
 * @example
 * await copyExtraFiles(__dirname);
 */

export async function copyExtraFiles(
  portRootFolder: string,
  outputFolder: string = ''
): Promise<void> {
  const debug = debugService('copy-extra-files', parse(portRootFolder).name)

  debug(`${emojis.robot} copying extra files`)

  const { copy } = fileSystemService()
  const extraFilesPath = resolve(portRootFolder, folders.extraFolder)
  const extraFiles = await getAllFiles(extraFilesPath)

  const sanitizedExtraFiles = extraFiles.filter(
    (file) =>
      !files.blackListedFiles.find((blackListedFile) =>
        file.includes(blackListedFile)
      )
  )

  for (const from of sanitizedExtraFiles) {
    try {
      const portFolderName = basename(portRootFolder)

      const defaultDistPath = from.replace(
        `src/ports/${portFolderName}/extra/`,
        `${folders.distFolder}/${portFolderName}/`
      )

      const providedDistPath = from.replace(
        `${resolve()}/src/ports/${portFolderName}/extra/`,
        `${outputFolder}/`
      )

      const distFolder = outputFolder
        ? parse(providedDistPath).dir
        : parse(defaultDistPath).dir

      await copy(from, distFolder)

      debug(`${emojis.shine} done!`)
    } catch (err) {
      console.error(err)
    }
  }
}
