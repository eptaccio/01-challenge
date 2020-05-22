const {
  shuffle
} = require('deck/deck')

const { currentDeck } = require('./helpers/mockData')

describe('deck/shuffle', () => {
  it('should shuffle deck', () => {
    const { cards } = shuffle(currentDeck)
    expect(cards).not.toMatchObject(currentDeck.cards)
  })
})
