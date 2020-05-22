const deckResponse = ({ cards, _id, selectedCards }) => {
  return {
    cards,
    id: _id,
    size: cards.length,
    selectedCards
  }
}

module.exports = {
  deckResponse
}
