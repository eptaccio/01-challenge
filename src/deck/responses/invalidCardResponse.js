const { errorResponse } = require('./errorResponse')

const invalidCardResponse = message => {
  return errorResponse({
    message: message || 'invalid card to shuffle'
  })
}

module.exports = {
  invalidCardResponse
}
