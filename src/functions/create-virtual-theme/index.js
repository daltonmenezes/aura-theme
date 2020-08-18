module.exports = ({ transformer, ...rest }) => {
  try {
    const runTransformer = require(`./transformers/${transformer}`)

    return runTransformer(rest)
  } catch {
    throw Error(`
      Something went wrong.
        There was a problem with the selected transformer.
        Please, check if "${transformer}" is typed correctly and if it exists.
    `)
  }
}
