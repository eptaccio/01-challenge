const { errorResponse } = require('./errorResponse')

const cardNotAvailableResponse = () => {
  return errorResponse({
    message: 'this card cannot return to deck, check usedCards'
  })
}

module.exports = {
  cardNotAvailableResponse
}
