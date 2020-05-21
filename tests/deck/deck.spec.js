const {
  createDeck,
  DECK_DEFINITION,
  shuffle,
  getRandomCard
} = require('deck/deck')

const DECK_SIZE = 52

const removeDuplications = list => [...new Set(list)]

describe('deck', () => {
  describe('deck creation', () => {
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

  describe('deck manipulation', () => {
    describe('deck/shuffle', () => {
      const currentDeck = {
        cards: [
          { value: 'A', suit: 'SPADES' },
          { value: '2', suit: 'DIAMONDS' },
          { value: '3', suit: 'CLUBS' },
          { value: '4', suit: 'HEARTS' }
        ]
      }

      it('should return a random card from the deck', () => {
        const { selectedCard, cards: newCards } = getRandomCard({
          cards: currentDeck.cards
        })

        const isSelectedCardOnDeck = newCards.some(card =>
          card.value === selectedCard.value &&
          card.suit === selectedCard.suit
        )

        expect(isSelectedCardOnDeck).toBeFalsy()
        expect(newCards).not.toStrictEqual(currentDeck.cards)
        expect(currentDeck.cards.length).not.toEqual(newCards.length)
        expect(currentDeck.cards.length).not.toEqual(newCards.length)
      })

      it('should shuffle deck', () => {
        const { cards } = shuffle(currentDeck)
        expect(cards).not.toMatchObject(currentDeck.cards)
      })
    })
  })
})
