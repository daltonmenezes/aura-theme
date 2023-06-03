import { AuraAPI } from 'core'

export default function (Aura: AuraAPI) {
  const { colorSchemes } = Aura

  const dark = Object.entries(colorSchemes.dark).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}Dark`]: value,
      }
    },
    {}
  )

  const darkSoft = Object.entries(colorSchemes.darkSoft).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}DarkSoftText`]: value,
      }
    },
    {}
  )

  const softDark = Object.entries(colorSchemes.softDark).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}SoftDark`]: value,
      }
    },
    {}
  )

  const softDarkSoft = Object.entries(colorSchemes.softDarkSoft).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [`${key}SoftDarkSoftText`]: value,
      }
    },
    {}
  )

  return {
    dark,
    darkSoft,
    softDark,
    softDarkSoft,
  }
}
