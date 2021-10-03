#!/usr/bin/env node

import { log } from './utils'
import { help } from './commands/help'
import { getStdin } from './stdin'
import { getCommandHandler } from './commands'

async function AuraCLI() {
  const { command, args } = getStdin()
  const handler = await getCommandHandler(command)

  if (!command) {
    return help()
  }

  if (!handler) {
    return log.message(`🚩 Unknown command: ${command}`)
  }

  await handler(args)
}

try {
  AuraCLI()
} catch (error: any) {}
