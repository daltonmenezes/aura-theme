import { getStdin } from 'core/cli/stdin'
import { cli } from 'core/cli/constants'

export function allowedPorts(targets: string[]) {
  const { args, command } = getStdin()
  const listOfPortsToAllow = args.filter((arg) => arg !== command)
  const hasPortsToAllow = listOfPortsToAllow.length > 0

  if (!hasPortsToAllow) return targets

  const shouldFilterPortList = command === cli.commandToAllowSpecificPorts

  const allowedPortList = targets.filter(
    (target) => shouldFilterPortList && listOfPortsToAllow.includes(target)
  )

  return allowedPortList
}
