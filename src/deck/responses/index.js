const { deckResponse } = require('./deckResponse')
const { errorResponse } = require('./errorResponse')
const { invalidDeckIdResponse } = require('./invalidDeckIdResponse')
const { deckNotFoundResponse } = require('./deckNotFoundResponse')
const { invalidCardResponse } = require('./invalidCardResponse')
const { invalidShufflePosition } = require('./invalidShufflePosition')
const { emptyDeckResponse } = require('./emptyDeckResponse')
const { dealQuantityNotAvailableResponse } = require('./dealQuantityNotAvailableResponse')
const { cardNotAvailableResponse } = require('./cardNotAvailableResponse')

module.exports = {
  deckResponse,
  errorResponse,
  invalidDeckIdResponse,
  deckNotFoundResponse,
  invalidCardResponse,
  invalidShufflePosition,
  emptyDeckResponse,
  dealQuantityNotAvailableResponse,
  cardNotAvailableResponse
}
