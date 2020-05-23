const {
  removeCardFromUsedCards
} = require('deck/deck')

const { currentDeck } = require('./helpers/mockData')

describe('should remove card from used cards', () => {
  it('removeCardFromUsedCards', () => {
    const [cardToRemove] = currentDeck.usedCards

    const { usedCards } = removeCardFromUsedCards({
      usedCards: currentDeck.usedCards,
      card: cardToRemove
    })

    expect(usedCards.length).toEqual(0)
  })
})
