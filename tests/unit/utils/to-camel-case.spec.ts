import { toCamelCase } from 'shared/utils'

describe('toCamelCase test cases', () => {
  it('should be able to format a given string to camel-case', () => {
    const themeName = toCamelCase('aura theme', ' ')

    expect(themeName).toBe('auraTheme')
  })
})
