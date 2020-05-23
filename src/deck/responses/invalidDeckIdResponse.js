const { errorResponse } = require('./errorResponse')

const invalidDeckIdResponse = deckId => {
  const invalidIdMessage = 'deckId must be a valid id'
  const idNotDefinedMessage = '`deckId` is required'

  const message = deckId ? invalidIdMessage : idNotDefinedMessage

  return errorResponse({
    message
  })
}

module.exports = {
  invalidDeckIdResponse
}
