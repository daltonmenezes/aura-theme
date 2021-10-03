import { execSync as exec } from 'child_process'

import {
  ShellServiceProvider,
  ShellServiceOptions,
} from 'core/@types/services/shell'

const _10MB = 10 * 1024 * 1024

const defaultOptions: ShellServiceOptions = {
  stdio: 'ignore',
  maxBuffer: _10MB,
}

export function childProcessProvider(): ShellServiceProvider {
  return {
    shellSync(command, options = defaultOptions) {
      try {
        const data = exec(command, options)

        return String(data)
      } catch (error) {
        console.error(error)
      }
    },
  }
}
