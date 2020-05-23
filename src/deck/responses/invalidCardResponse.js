const { errorResponse } = require('./errorResponse')

const invalidCardResponse = message => {
  return errorResponse({
    message: message || 'invalid `suit` or `value`'
  })
}

module.exports = {
  invalidCardResponse
}
