import { AuraAPI } from 'core'

export default function (Aura: AuraAPI) {
  const { colorSchemes, colorHandlers } = Aura

  const darkSchemeWithoutHashes = Object.entries(colorSchemes.dark).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}WithoutHash`]: value.replace('#', ''),
      }
    },
    {}
  )

  const darkRGBScheme = Object.entries(
    colorHandlers.schemeToRgb(colorSchemes.dark)
  ).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${key}RGB`]: value,
    }
  }, {})

  const darkSoftScheme = Object.entries(colorSchemes.darkSoft).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}Soft`]: value,
      }
    },
    {}
  )

  const darkSoftRGBScheme = Object.entries(
    colorHandlers.schemeToRgb(colorSchemes.darkSoft)
  ).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${key}SoftRGB`]: value,
    }
  }, {})

  const darkSoftSchemeWithoutHashes = Object.entries(
    colorSchemes.darkSoft
  ).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${key}SoftWithoutHash`]: value.replace('#', ''),
    }
  }, {})

  return {
    darkSchemeWithoutHashes,
    darkRGBScheme,
    darkSoftScheme,
    darkSoftRGBScheme,
    darkSoftSchemeWithoutHashes,
  }
}
