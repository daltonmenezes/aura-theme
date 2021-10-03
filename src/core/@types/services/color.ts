export type RGB = [number, number, number]

export interface ColorAdjustmentsServiceProvider {
  shade(percentage: string | number): (color: string) => string
  desaturate(amount: string | number): (color: string) => string
}

export interface ColorConvertionServiceProvider {
  hexToRgb(color: string): number[]
  rgbToHex(color: RGB): string
}

export type TerminalConvertionServiceProvider = {
  terminalConvertion: TermColors
}

export type ColorsServiceProvider = ColorAdjustmentsServiceProvider &
  ColorConvertionServiceProvider &
  TerminalConvertionServiceProvider
