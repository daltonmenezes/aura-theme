import { ShellServiceProvider } from 'core/@types/services/shell'
import { childProcessProvider } from './providers/child-process'

export function shellService(): ShellServiceProvider {
  return childProcessProvider()
}
