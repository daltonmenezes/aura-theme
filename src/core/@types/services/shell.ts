export type StdioOptions = 'overlapped' | 'pipe' | 'ignore' | 'inherit'

type Encoding =
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

export type ShellServiceOptions = {
  stdio?: StdioOptions
  encoding?: Encoding
  maxBuffer?: number
}

export interface ShellServiceProvider {
  shellSync(
    command: string,
    options?: ShellServiceOptions
  ): string | undefined
}
