const {
  shuffleOn,
  SHUFFLE_POSITIONS
} = require('deck/deck')

const { currentDeck } = require('./helpers/mockData')

describe('should shuffle the card into deck', () => {
  const newCard = { value: '10', suit: 'HEARTS' }

  it('shuffle on TOP', () => {
    const { cards } = shuffleOn({
      newCard,
      cards: currentDeck.cards,
      position: SHUFFLE_POSITIONS.TOP
    })

    const currentDeckLength = currentDeck.cards.length
    const [firstCard] = cards

    expect(firstCard).toMatchObject(newCard)
    expect(cards.length).toEqual(currentDeckLength + 1)
  })

  it('shuffle on MIDDLE', () => {
    const { cards } = shuffleOn({
      newCard,
      cards: currentDeck.cards,
      position: SHUFFLE_POSITIONS.MIDDLE
    })

    const currentDeckLength = currentDeck.cards.length

    const expectedCards = [
      currentDeck.cards[0],
      currentDeck.cards[1],
      newCard,
      currentDeck.cards[2],
      currentDeck.cards[3]
    ]

    expect(cards).toMatchObject(expectedCards)
    expect(cards.length).toEqual(currentDeckLength + 1)
  })

  it('shuffle on BOTTOM', () => {
    const { cards } = shuffleOn({
      newCard,
      cards: currentDeck.cards,
      position: SHUFFLE_POSITIONS.BOTTOM
    })

    const currentDeckLength = currentDeck.cards.length

    const expectedCards = [
      ...currentDeck.cards,
      newCard
    ]

    expect(cards).toMatchObject(expectedCards)
    expect(cards.length).toEqual(currentDeckLength + 1)
  })
})
