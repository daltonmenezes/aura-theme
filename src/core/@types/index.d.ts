declare interface OptionalPortProps {
  outputFileName?: string
  outputDist?: string
  showDebugLogs?: boolean
}

declare interface PortCompiler extends OptionalPortProps {
  template: string
  replacements: Record<string, unknown>
}

declare type PortInMemoryCompiler = Pick<
  PortCompiler,
  'template' | 'replacements'
>

declare interface PortFromInMemoryCompiler {
  template: string
  output: string
}

declare interface DocumentCompiler extends PortCompiler {}

declare interface PortFileProps extends OptionalPortProps {
  template: string
  fileName: string
  templateRootFolder: string
}

declare type Complete<T> = {
  [K in keyof T]-?: T[K]
}
