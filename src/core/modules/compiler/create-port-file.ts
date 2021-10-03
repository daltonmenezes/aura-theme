import { resolve } from 'path'
import { folders } from 'shared/constants'
import { fileSystemService } from 'services'

export async function createPortFile(props: PortFileProps) {
  try {
    const { template, fileName, templateRootFolder, outputDist } = props
    const { writeFile } = fileSystemService()

    const defaultDistPath = resolve(
      folders.distFolder,
      templateRootFolder,
      fileName
    )

    const providedDistPath = resolve(outputDist || '', fileName)
    const filePath = outputDist ? providedDistPath : defaultDistPath

    await writeFile(filePath, template)
  } catch (error) {
    console.error(error)
  }
}
