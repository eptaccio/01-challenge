const { DECK_DEFINITION } = require('../deck/deck/createDeck')

const isValidCard = card => {
  const cardSuit = card.suit && card.suit.toUpperCase()
  const cardValue = card.value && card.value.toUpperCase()

  if (!cardSuit || !cardValue) {
    return false
  }

  const isValidSuit = DECK_DEFINITION.suits.includes(cardSuit)
  const isValidValue = DECK_DEFINITION.values.includes(cardValue)

  return isValidSuit && isValidValue
}

module.exports = {
  isValidCard
}
