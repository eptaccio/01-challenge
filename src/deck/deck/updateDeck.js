const { Deck } = require('./model')

const updateDeck = ({ _id, cards, usedCards = [] }) =>
  Deck.findByIdAndUpdate({ _id }, { cards, usedCards })

module.exports = {
  updateDeck
}
