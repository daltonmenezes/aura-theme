import { fileSystemService } from 'services/file-system'

/**
 * Used to remove files and folders recursively.
 *
 * @async
 * @param  {String} path - A file or folder path to be removed
 * @returns {Promise<void>} void
 * @example
 * await unlink('/path/to/file/or/folder')
 */
export const unlink = fileSystemService().unlink
