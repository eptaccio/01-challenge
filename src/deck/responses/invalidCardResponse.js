const { errorResponse } = require('./errorResponse')

const invalidCardResponse = deckId => {
  return errorResponse({
    message: 'invalid card to shuffle'
  })
}

module.exports = {
  invalidCardResponse
}
