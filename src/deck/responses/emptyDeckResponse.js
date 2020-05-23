const { errorResponse } = require('./errorResponse')

const emptyDeckResponse = deckId => {
  return errorResponse({
    message: `deck ${deckId} is empty`
  })
}

module.exports = {
  emptyDeckResponse
}
