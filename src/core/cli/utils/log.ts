import { applyPad } from './pad'

export const log = {
  message: (message: string, padStart?: number) =>
    console.log(applyPad(message, padStart)),

  tip: (message: string, padStart: number = 3) =>
    console.log(applyPad(`🚀 Tip: ${message}`, padStart)),

  starting: (message: string, padStart?: number) =>
    console.log(applyPad(`🤞 Starting ${message}...`, padStart)),

  error: (message: string, padStart: number = 3) => {
    throw new Error(applyPad(`\n🚨 Error: ${message}\n`, padStart))
  },

  writing: (message: string, padStart?: number) =>
    console.log(applyPad(`🤖  Writing ${message}`, padStart)),

  done: () => console.log(applyPad('✨ Done!', 3)),

  allDone: () => console.log(applyPad('🎉 All done here!')),
}
