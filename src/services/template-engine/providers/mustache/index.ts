import { TemplateEngineServiceProvider } from 'core/@types/services/template-engine'
import Mustache from 'mustache'

export function mustacheProvider(): TemplateEngineServiceProvider {
  return {
    render(template: string, model: Record<string, unknown>) {
      return Mustache.render(template, model)
    },
  }
}
