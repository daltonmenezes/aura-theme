import { resolve } from 'path'

export const folders = {
  distFolder: 'packages',
  extraFolder: 'extra',
  sharedFolder: 'shared',
  portsFolder: resolve('src', 'ports'),
  homeFolder: String(process.env.HOME),
}
