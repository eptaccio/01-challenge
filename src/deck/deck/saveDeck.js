const { Deck } = require('./model')

const saveDeck = async ({ cards }) => {
  const deck = new Deck({
    cards
  })

  await deck.save()

  return deck
}

module.exports = {
  saveDeck
}
