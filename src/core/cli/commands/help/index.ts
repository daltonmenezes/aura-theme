import { log } from 'core/cli/utils'

const helpInfo = `
Usage: aura <command> [options]
      
  🪄  aura make port <port-name>              create a new port using the provided name
  🪄  aura tokenize <target> <destination>    tokenize the target file and save it to the destination
                                             (it replaces the hex color to Aura accent tokens whenever possible)

  🪄  aura build                              compile all the ports in production mode
  🪄  aura build only <port-name>             compile only the provided port by its name in prod
  🪄  aura dev                                compile all the ports in dev mode (watch for changes)
  🪄  aura dev only <port-name>               compile only the provided port by its name in dev (watch for changes)
`

export async function help() {
  const { message } = log

  message('\n✨ Welcome to Aura CLI ✨')
  message(helpInfo)
}
