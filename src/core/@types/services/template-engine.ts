export interface TemplateEngineServiceProvider {
  render(template: string, model: Record<string, unknown>): string
}
