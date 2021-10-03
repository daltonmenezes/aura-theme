import { schemeToRgb } from 'core/modules/colors/scheme-to-rgb'
import { colorSchemeFixture } from 'root/tests/fixtures/color-scheme'

describe('schemeToRgb test cases', () => {
  it('should be able to convert a hex color scheme to rgb', () => {
    const scheme = schemeToRgb(colorSchemeFixture)

    const expectedScheme = {
      accent1: [162, 119, 255],
      accent2: [97, 255, 202],
    }

    expect(scheme).toStrictEqual(expectedScheme)
  })
})
