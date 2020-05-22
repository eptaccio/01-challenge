const { Deck } = require('./model')

const updateDeck = ({ id, data }) =>
  Deck.findByIdAndUpdate(id, data)

module.exports = {
  updateDeck
}
