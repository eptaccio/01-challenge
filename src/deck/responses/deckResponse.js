const deckResponse = ({ cards, _id }) => {
  return {
    cards,
    id: _id,
    size: cards.length
  }
}

module.exports = {
  deckResponse
}
