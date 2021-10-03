import { TemplateEngineServiceProvider } from 'core/@types/services/template-engine'
import { mustacheProvider } from './providers/mustache'

export function templateEngineService(): TemplateEngineServiceProvider {
  return mustacheProvider()
}
