const { Deck } = require('./model')

const findDeck = ({ id }) =>
  Deck.findById(id)

module.exports = {
  findDeck
}
