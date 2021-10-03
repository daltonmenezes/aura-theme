import { fileSystemService } from 'services'

/**
 * Used to create a port file in disk from an in memory one.
 * @async
 * @param  {PortCompiler} props
 * @returns {Promise<void>} void
 * @example
 * await createFromInMemoryPort({
 *   template: templateInMemory,
 *   output: resolve(
 *     constants.folders.distFolder,
 *     'aura-port',
 *     'aura-theme.json'
 *   ),
 *});
 */

export async function createFromInMemoryPort(
  props: PortFromInMemoryCompiler
): Promise<void> {
  const { template, output } = props
  const { writeFile } = fileSystemService()

  await writeFile(output, template)
}
