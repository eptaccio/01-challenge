const { deckResponse } = require('./deckResponse')
const { errorResponse } = require('./errorResponse')
const { invalidDeckIdResponse } = require('./invalidDeckIdResponse')
const { deckNotFoundResponse } = require('./deckNotFoundResponse')

module.exports = {
  deckResponse,
  errorResponse,
  invalidDeckIdResponse,
  deckNotFoundResponse
}
