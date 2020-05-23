// TODO: add some logging lib
const loggerBuilder = fileName => ({
  info: args => console.info(`info: ${fileName}`, args),
  error: args => console.error(`error: ${fileName}`, args)
})

module.exports = {
  loggerBuilder
}
