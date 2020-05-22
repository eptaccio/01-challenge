const currentDeck = {
  cards: [
    { value: 'A', suit: 'SPADES' },
    { value: '2', suit: 'DIAMONDS' },
    { value: '3', suit: 'CLUBS' },
    { value: '4', suit: 'HEARTS' }
  ]
}

const firstItem = { value: 'A', suit: 'SPADES' }
const secondItem = { value: '2', suit: 'DIAMONDS' }
const thirdItem = { value: '3', suit: 'CLUBS' }

const newCards = {
  firstItem,
  secondItem,
  thirdItem
}

module.exports = {
  currentDeck,
  newCards
}
