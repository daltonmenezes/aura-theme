import { DebugServiceProvider } from 'core/@types/services/debug'
import { debugProvider } from './providers/debug'

export const debugService = (
  scope: string,
  portName: string
): DebugServiceProvider => debugProvider()(scope, portName)
