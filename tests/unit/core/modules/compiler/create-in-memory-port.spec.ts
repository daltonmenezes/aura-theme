import { createInMemoryPort } from 'core/modules'
import templateFixture from 'root/tests/fixtures/template.json'

jest.mock('services/file-system', () => ({
  fileSystemService: jest.fn().mockImplementation(() => ({
    readFile: jest.fn().mockReturnValue(
      JSON.stringify({
        portName: '{{ portName }}',
      })
    ),
  })),
}))

describe('createInMemoryPort test cases', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should be able to replace tokens in a given template file', async () => {
    const inMemoryPort = await createInMemoryPort({
      template: JSON.stringify(templateFixture),
      replacements: {
        portName: 'Aura Theme',
      },
    })

    const inlineInMemoryPortContent = inMemoryPort.replace(/\s+/g, '')

    expect(inlineInMemoryPortContent).toBe('{"portName":"AuraTheme"}')
  })
})
