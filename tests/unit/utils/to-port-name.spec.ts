import { toPortName } from 'shared/utils'

describe('toPortName test cases', () => {
  it('should be able to format a given string from kebab-case to pascal-case', () => {
    const themeName = toPortName('aura-theme')

    expect(themeName).toBe('AuraTheme')
  })

  it('should be able to format a given string from kebab-case to pascal-case sanatized', () => {
    const themeName = toPortName('aura-theme ,. **** +')

    expect(themeName).toBe('AuraTheme')
  })
})
