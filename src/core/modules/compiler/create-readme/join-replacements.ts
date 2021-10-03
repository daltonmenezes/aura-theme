import { parse } from 'path'
import { info as defaultThemeReplacementes } from 'shared/constants'
import { fileSystemService, templateEngineService } from 'services'

export async function joinReplacements(documentPath: string, props: any) {
  const { readFile } = fileSystemService()
  const { render } = templateEngineService()

  const { name } = parse(documentPath)
  const rawDocumentData = await readFile(documentPath)

  const preCompiledDocument = render(rawDocumentData, {
    ...defaultThemeReplacementes,
    ...(props.replacements || {}),
  })

  const updatedReplacements = {
    ...defaultThemeReplacementes,
    [name]: preCompiledDocument,
    ...props.replacements,
  }

  Object.assign(props.replacements, updatedReplacements)
}
