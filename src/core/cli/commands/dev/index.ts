import { boot } from 'boot'

export async function dev([type]: string[]) {
  /* override the first argument,
    so "allowed-ports.ts" can receive the command as "only" instead "dev" */
  process.argv[2] = type

  await boot()
}
