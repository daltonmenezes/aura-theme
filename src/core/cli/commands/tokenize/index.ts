import { Aura } from 'core'
import { resolve, parse } from 'path'
import { fileSystemService } from 'services'
import { log } from 'core/cli/utils'

export async function tokenize([from, to]: string[]) {
  console.clear()

  if (!from || !to) {
    throw new Error(
      'Missing arguments.\n\n\tPlease provide a path to a file to tokenize and a path to save it\n'
    )
  }

  const { colorHandlers } = Aura
  const { readFile, writeFile } = fileSystemService()
  const { ext } = parse(to)

  let outputPath = resolve(to)

  log.starting('the process of tokenization')

  if (!ext) {
    const { base } = parse(from)

    outputPath = resolve(to, base)
  }

  log.message('- Reading the target to apply the tokenization', 3)
  const source = await readFile(resolve(from))

  log.writing('the tokinized file in disk')
  const tokenizedData = colorHandlers.tokenize(source)

  await writeFile(outputPath, tokenizedData)
}
