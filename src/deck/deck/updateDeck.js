const { Deck } = require('./model')

const updateDeck = ({ _id, cards }) =>
  Deck.findByIdAndUpdate({ _id }, { cards })

module.exports = {
  updateDeck
}
