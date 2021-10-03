import { fileSystemService } from 'services'
import { resolve } from 'path'

/**
 * Used get all files from a root folder recursively.
 *
 * @async
 * @param  {String} directory - The root directory to get all file paths
 * @private
 * @param  {String[]} [files=[]] - Used to store the paths recursively, you don't need to pass it manually
 * @returns {Promise<string[]>} Array of paths
 * @example
 * await getAllFiles('/path/to/folder')
 * // ['path/to/file1.ext', 'path/folder/to/file2.ext']
 */

export async function getAllFiles(
  directory: string,
  files: string[] = []
): Promise<string[]> {
  const { readDir, fileStatus } = fileSystemService()
  const dir = await readDir(directory)

  for (const file of dir) {
    const absolute = resolve(directory, file)
    const isDir = (await fileStatus(absolute)).isDirectory()

    if (isDir) {
      await getAllFiles(absolute, files)
    } else {
      files.push(absolute)
    }
  }

  return files
}
