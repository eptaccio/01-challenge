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

const SHUFFLE_POSITIONS = {
  TOP: 'TOP',
  MIDDLE: 'MIDDLE',
  BOTTOM: 'BOTTOM'
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
  const currentCards = [...cards]
  const randomPosition = Math.floor(Math.random() * cards.length)
  const [selectedCard] = currentCards.splice(randomPosition, 1)

  return {
    selectedCard,
    cards: currentCards
  }
}

const shuffle = ({ cards, newDeck = [] }) => {
  if (cards.length === 0) {
    return {
      cards: newDeck
    }
  }

  const {
    selectedCard,
    cards: restOfCards
  } = getRandomCard({ cards })

  newDeck.push(selectedCard)

  return shuffle({
    cards: restOfCards,
    newDeck
  })
}

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

const shuffleOn = ({ newCard, cards, position }) => {
  if (position === SHUFFLE_POSITIONS.TOP) {
    return {
      cards: [newCard, ...cards]
    }
  }

  if (position === SHUFFLE_POSITIONS.BOTTOM) {
    return {
      cards: [...cards, newCard]
    }
  }

  const { cards: newDeck } = addToMiddle({
    newCard,
    cards
  })

  return {
    cards: newDeck
  }
}

const deal = ({ cards }) => {
  const currentCards = [...cards]
  const selectedCard = currentCards.shift()

  return {
    selectedCard,
    cards: currentCards
  }
}

module.exports = {
  createDeck,
  getRandomCard,
  shuffle,
  deal,
  shuffleOn,
  addToMiddle,
  DECK_DEFINITION,
  SHUFFLE_POSITIONS
}
