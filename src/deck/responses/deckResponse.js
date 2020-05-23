const deckResponse = ({ cards, _id, selectedCards, usedCards }) => {
  return {
    cards,
    id: _id,
    size: cards.length,
    selectedCards,
    usedCards
  }
}

module.exports = {
  deckResponse
}
