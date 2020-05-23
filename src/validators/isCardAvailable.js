const isCardAvailable = (card, usedCards) =>
  usedCards.some(
    usedCard => usedCard.value === card.value &&
    usedCard.suit === card.suit
  )

module.exports = {
  isCardAvailable
}
