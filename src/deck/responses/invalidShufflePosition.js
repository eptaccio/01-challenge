const { errorResponse } = require('./errorResponse')

const invalidShufflePosition = () => {
  return errorResponse({
    message: 'invalid shuffle position, options: TOP, MIDDLE and BOTTOM'
  })
}

module.exports = {
  invalidShufflePosition
}
