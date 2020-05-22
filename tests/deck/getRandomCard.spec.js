const {
  getRandomCard
} = require('deck/deck')

const { currentDeck } = require('./helpers/mockData')
const { cardIsOnDeck } = require('./helpers/cardIsOnDeck')

it('should return a random card from the deck', () => {
  const { selectedCard, cards: newCards } = getRandomCard({
    cards: currentDeck.cards
  })

  const isSelectedCardOnDeck = cardIsOnDeck(selectedCard, newCards)

  expect(isSelectedCardOnDeck).toBeFalsy()
  expect(newCards).not.toStrictEqual(currentDeck.cards)
  expect(currentDeck.cards.length).not.toEqual(newCards.length)
})
