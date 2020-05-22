const {
  newCards: {
    firstItem,
    secondItem,
    thirdItem,
    newCard
  }
} = require('./helpers/mockData')

const {
  addToMiddle
} = require('deck/deck')

describe('deck/shuffle/addToMiddle', () => {
  it('should add a item to middle of array with two items', () => {
    const deck = [
      firstItem,
      secondItem
    ]

    const { cards } = addToMiddle({
      cards: deck,
      newCard
    })

    expect(cards).toMatchObject([
      firstItem,
      newCard,
      secondItem
    ])
  })

  it('should add a item to middle of array with three items', () => {
    const deck = [
      firstItem,
      secondItem,
      thirdItem
    ]

    const { cards } = addToMiddle({
      cards: deck,
      newCard
    })

    expect(cards).toMatchObject([
      firstItem,
      secondItem,
      newCard,
      thirdItem
    ])
  })
})
