import { resolve } from 'path'
import { joinReplacements } from 'core/modules/compiler/create-readme/join-replacements'

jest.mock('services/file-system', () => ({
  fileSystemService: jest.fn().mockImplementation(() => ({
    readFile: jest.fn().mockReturnValue(''),
  })),
}))

describe('joinReplacements test cases', () => {
  const readmeFixturePath = resolve('tests', 'fixtures', 'README.md')

  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should be able to populate the given props replacements without overriding the displayName property', async () => {
    const props = {
      replacements: {
        displayName: 'Aura Theme 2',
      },
    }

    await joinReplacements(readmeFixturePath, props)

    expect(props.replacements.displayName).toBe('Aura Theme 2')
    expect(props.replacements).toHaveProperty('slug')
  })

  it('should be able to use the default displayName property from package.json', async () => {
    const props = {
      replacements: {},
    }

    await joinReplacements(readmeFixturePath, props)

    expect(props.replacements).toHaveProperty('displayName')

    expect(props.replacements).toEqual(
      expect.objectContaining({ displayName: 'Aura Theme' })
    )
  })
})
