export function getStdin() {
  const [command, ...args] = process.argv.slice(2)

  return { command, args }
}
