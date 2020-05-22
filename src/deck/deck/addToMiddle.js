const addToMiddle = ({ newCard, cards }) => {
  const currentCards = [...cards]
  const deckSize = currentCards.length
  const newItemPosition = Math.round(deckSize / 2)
  const removeCount = 0

  currentCards.splice(
    newItemPosition,
    removeCount,
    newCard
  )

  return {
    cards: currentCards
  }
}

module.exports = {
  addToMiddle
}
