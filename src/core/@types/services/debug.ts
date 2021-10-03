export type DebugProvider = (
  scope: string,
  portName: string
) => (message: string, showDebugLogs?: boolean) => void

export type DebugServiceProvider = (
  message: string,
  showDebugLogs?: boolean
) => void
