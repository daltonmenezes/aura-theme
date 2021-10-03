import { capitalizeFirstLetter } from 'shared/utils'

describe('capitalizeFirstLetter test cases', () => {
  it('should be able to capitalize only the first letter of a given string', () => {
    const themeName = capitalizeFirstLetter('aura theme')

    expect(themeName).toBe('Aura theme')
  })
})
