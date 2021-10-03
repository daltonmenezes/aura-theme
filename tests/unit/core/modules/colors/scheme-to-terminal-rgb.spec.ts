import { schemeToTerminalRgb } from 'core/modules/colors/scheme-to-terminal-rgb'
import { colorSchemeFixture } from 'root/tests/fixtures/color-scheme'

describe('schemeToTerminalRgb test cases', () => {
  it('should be able to convert a hex color scheme to rgb compatible with iTerm scheme', () => {
    const scheme = schemeToTerminalRgb(colorSchemeFixture)

    const expectedScheme = {
      accent1_red: 0.6352941176470588,
      accent1_green: 0.4666666666666667,
      accent1_blue: 1,
      accent2_red: 0.3803921568627451,
      accent2_green: 1,
      accent2_blue: 0.792156862745098,
    }

    expect(scheme).toStrictEqual(expectedScheme)
  })
})
