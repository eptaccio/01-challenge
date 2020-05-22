const { Deck } = require('./model')

const saveDeck = async ({ cards }) => {
  const deck = new Deck({
    cards
  })

  return deck.save()
}

module.exports = {
  saveDeck
}
