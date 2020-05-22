const deal = ({ cards, quantity = 1 }) => {
  const currentCards = [...cards]
  const arrayStart = 0

  const selectedCards = currentCards.splice(
    arrayStart,
    quantity
  )

  return {
    selectedCards,
    cards: currentCards
  }
}

module.exports = {
  deal
}
