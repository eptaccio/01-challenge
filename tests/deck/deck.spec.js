const { createDeck, DECK_DEFINITION } = require('deck/deck')

const DECK_SIZE = 52

const removeDuplications = list => [...new Set(list)]

describe('deck', () => {
  it('should create a new deck with correct size', () => {
    const deck = createDeck()
    expect(deck.cards.length).toEqual(DECK_SIZE)
  })

  it('should create a new deck with correct suits', () => {
    const deck = createDeck()

    const suitsOnTheDeck = deck.cards.map(
      card => card.suit
    )

    const currentSuits = removeDuplications(suitsOnTheDeck)

    expect(currentSuits).toMatchObject(DECK_DEFINITION.suits)
  })

  it('should create a new deck correct values', () => {
    const deck = createDeck()

    for (const suit of DECK_DEFINITION.suits) {
      const currentCards = deck.cards.filter(
        card => card.suit === suit
      )

      expect(currentCards.length).toEqual(13)
    }
  })
})
