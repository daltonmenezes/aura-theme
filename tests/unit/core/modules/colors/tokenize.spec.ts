import { tokenize } from 'core/modules/colors/tokenize'
import { colorSchemeFixture } from 'root/tests/fixtures/color-scheme'

describe('tokenize test cases', () => {
  it('should be able to convert hex color codes to their respective accent tokens', () => {
    const tokenizedContent = tokenize(JSON.stringify(colorSchemeFixture))

    const expectedResult = {
      accent1: '{{ accent1 }}',
      accent2: '{{ accent2 }}',
    }

    expect(JSON.parse(tokenizedContent)).toStrictEqual(expectedResult)
  })
})
