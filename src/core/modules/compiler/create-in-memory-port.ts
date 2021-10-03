import { fileSystemService, templateEngineService } from 'services'

/**
 * Used to create a port in memory.
 *
 * This is useful, for example, when you need to convert one port to another before creating it in disk.
 *
 * @async
 * @param  {PortInMemoryCompiler} props
 * @returns {Promise<String>} String
 * @example
 * await createInMemoryPort({
 *   template: 'path/to/template.json',
 *   replacements: {
 *     portName: 'Aura Theme',
 *   },
 * }); // { "portName": "Aura Theme" }
 */

export async function createInMemoryPort(
  props: PortInMemoryCompiler
): Promise<string> {
  const { template, replacements } = props
  const { readFile } = fileSystemService()
  const templateEngine = templateEngineService()
  const templateFile = await readFile(template)

  const preCompiledPort = templateEngine.render(templateFile, replacements)

  return preCompiledPort
}
