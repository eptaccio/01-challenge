const getRandomCard = ({ cards }) => {
  const currentCards = [...cards]
  const randomPosition = Math.floor(Math.random() * cards.length)
  const [selectedCard] = currentCards.splice(randomPosition, 1)

  return {
    selectedCard,
    cards: currentCards
  }
}

module.exports = {
  getRandomCard
}
