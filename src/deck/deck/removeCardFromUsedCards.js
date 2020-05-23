const removeCardFromUsedCards = ({ usedCards, card }) => {
  const cards = usedCards.filter(
    usedCard => usedCard.value !== card.value &&
    usedCard.suit !== card.suit
  )

  return {
    usedCards: cards
  }
}

module.exports = {
  removeCardFromUsedCards
}
