const DECK_DEFINITION = {
  suits: [
    'SPADES', 'DIAMONDS', 'CLUBS', 'HEARTS'
  ],
  values: [
    'A', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '10', 'J', 'Q', 'K'
  ]
}

const createDeck = () => {
  const cards = []
  const availableSuits = DECK_DEFINITION.suits
  const availableCardValues = DECK_DEFINITION.values

  for (const suit of availableSuits) {
    const newCards = availableCardValues.map(value => {
      return {
        value,
        suit
      }
    })

    cards.push(...newCards)
  }

  return { cards }
}

const getRandomCard = ({ cards }) => {
  const randomPosition = Math.floor(Math.random() * cards.length)
  const [selectedCard] = cards.splice(randomPosition, 1)

  return {
    selectedCard,
    cards
  }
}

module.exports = {
  createDeck,
  getRandomCard,
  DECK_DEFINITION
}
