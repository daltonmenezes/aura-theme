export async function getCommandHandler(handler: string) {
  const handlers = {
    make: (await import('./make')).make,
    build: (await import('./build')).build,
    dev: (await import('./dev')).dev,
    tokenize: (await import('./tokenize')).tokenize,
    help: (await import('./help')).help,
  }

  type Handler = keyof typeof handlers

  return handlers[handler as Handler]
}
