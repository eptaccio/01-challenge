const { errorResponse } = require('./errorResponse')

const deckNotFoundResponse = deckId => {
  return errorResponse({
    message: `deck ${deckId} not found`
  })
}

module.exports = {
  deckNotFoundResponse
}
