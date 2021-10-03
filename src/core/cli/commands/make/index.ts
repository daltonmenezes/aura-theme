export async function make([type, portName]: string[]) {
  const handlers = {
    port: (await import('./port')).makePort,
  }

  type Handler = keyof typeof handlers

  const handler = handlers[type as Handler]

  if (!handler) {
    return
  }

  handler(portName)
}
