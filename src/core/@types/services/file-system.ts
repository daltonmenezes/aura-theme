export type OpenMode = number | string

export type BufferEncoding =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'binary'
  | 'hex'

export interface Stats<T> {
  isFile(): boolean
  isDirectory(): boolean
  isBlockDevice(): boolean
  isCharacterDevice(): boolean
  isSymbolicLink(): boolean
  isFIFO(): boolean
  isSocket(): boolean

  dev: T
  ino: T
  mode: T
  nlink: T
  uid: T
  gid: T
  rdev: T
  size: T
  blksize: T
  blocks: T
  atimeMs: T
  mtimeMs: T
  ctimeMs: T
  birthtimeMs: T
  atime: Date
  mtime: Date
  ctime: Date
  birthtime: Date
}

abstract class Stat implements Stats<number> {
  dev!: number
  ino!: number
  mode!: number
  nlink!: number
  uid!: number
  gid!: number
  rdev!: number
  size!: number
  blksize!: number
  blocks!: number
  atimeMs!: number
  mtimeMs!: number
  ctimeMs!: number
  birthtimeMs!: number
  atime!: Date
  mtime!: Date
  ctime!: Date
  birthtime!: Date

  abstract isFile(): boolean
  abstract isBlockDevice(): boolean
  abstract isDirectory(): boolean
  abstract isCharacterDevice(): boolean
  abstract isSymbolicLink(): boolean
  abstract isFIFO(): boolean
  abstract isSocket(): boolean
}

export type FileStatusServiceProvider = {
  fileStatus: (path: string) => Promise<Stat>
}

export type ReadFileServiceProvider = {
  readFile: (
    path: string,
    options?: { encoding: BufferEncoding; flag?: OpenMode } | BufferEncoding
  ) => Promise<string>
}

export type ReadDirServiceProvider = {
  readDir: (path: string) => Promise<string[]>
}

export interface WriteFileServiceProvider {
  writeFile(file: string, data: string): Promise<void>
}

export interface CopyFilesServiceProvider {
  copy(from: string, to: string): Promise<string[]>
}

export interface ZipServiceProvider {
  zip: {
    addFile(path: string): void
    writeZip(path: string): void
    zipFolder(
      targetFolder: string,
      outputPath: string
    ): Promise<void | Error>
  }
}

export interface UnlinkServiceProvider {
  unlink(path: string): Promise<void>
}

export type FileSystemServiceProvider = CopyFilesServiceProvider &
  WriteFileServiceProvider &
  ReadFileServiceProvider &
  ReadDirServiceProvider &
  FileStatusServiceProvider &
  ZipServiceProvider &
  UnlinkServiceProvider
