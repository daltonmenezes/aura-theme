import { DebugProvider } from 'core/@types/services/debug'
import { info } from 'shared/constants'
import d from 'debug'

export function debugProvider(): DebugProvider {
  return (scope, portName) => {
    const debug = d(`${info.slug}: ${scope} - ${portName}:`)
    return (message, showDebugLogs = true) => {
      showDebugLogs && debug(message)
    }
  }
}
