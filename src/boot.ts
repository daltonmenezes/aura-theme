import { Aura } from 'core'

const { loader, ...AuraAPI } = Aura

export async function boot() {
  await Aura.loader(AuraAPI)
}
