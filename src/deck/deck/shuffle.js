const { getRandomCard } = require('./getRandomCard')
const { addToMiddle } = require('./addToMiddle')

const SHUFFLE_POSITIONS = {
  TOP: 'TOP',
  MIDDLE: 'MIDDLE',
  BOTTOM: 'BOTTOM'
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

module.exports = {
  shuffle,
  shuffleOn,
  SHUFFLE_POSITIONS
}
