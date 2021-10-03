import { shellService, debugService } from 'services'
import { emojis } from 'shared/constants'
import { cli } from 'core/cli/constants'
import { boot } from 'boot'

export async function build([type, portName]: string[]) {
  const { shellSync } = shellService()
  const debug = debugService('build', 'process')

  /* override the first argument,
    so "allowed-ports.ts" can receive the command as "only" instead "build" */
  process.argv[2] = type

  const shouldBuildOnlySpecificPort =
    type === cli.commandToAllowSpecificPorts

  const commandToCleanThePort = `${cli.commandToCleanSpecificPort}/${portName}`

  if (shouldBuildOnlySpecificPort) {
    debug(`${emojis.robot} cleaning up old ${portName} build`)

    shellSync(commandToCleanThePort)
  } else {
    debug(`${emojis.robot} cleaning up old builds`)

    shellSync(cli.commandToCleanAllPorts)
  }

  debug(`${emojis.robot} starting to build...`)

  await boot()

  debug(`${emojis.shine} finished!`)
}
