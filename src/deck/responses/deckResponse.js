const deckResponse = ({ cards, _id, selectedCards, usedCards }) => {
  return {
    id: _id,
    counters: {
      availableCards: cards.length,
      usedCards: usedCards.length
    },
    selectedCards,
    usedCards,
    cards
  }
}

module.exports = {
  deckResponse
}
