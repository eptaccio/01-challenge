const {
  createDeck,
  DECK_DEFINITION,
  shuffle,
  deal,
  getRandomCard
} = require('deck/deck')

const DECK_SIZE = 52

const removeDuplications = list => [...new Set(list)]

const cardIsOnDeck = (selectedCard, cards) => cards.some(card =>
  card.value === selectedCard.value &&
  card.suit === selectedCard.suit
)

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
    const currentDeck = {
      cards: [
        { value: 'A', suit: 'SPADES' },
        { value: '2', suit: 'DIAMONDS' },
        { value: '3', suit: 'CLUBS' },
        { value: '4', suit: 'HEARTS' }
      ]
    }

    describe('deck/shuffle', () => {
      it('should return a random card from the deck', () => {
        const { selectedCard, cards: newCards } = getRandomCard({
          cards: currentDeck.cards
        })

        const isSelectedCardOnDeck = cardIsOnDeck(selectedCard, newCards)

        expect(isSelectedCardOnDeck).toBeFalsy()
        expect(newCards).not.toStrictEqual(currentDeck.cards)
        expect(currentDeck.cards.length).not.toEqual(newCards.length)
      })

      it('should shuffle deck', () => {
        const { cards } = shuffle(currentDeck)
        expect(cards).not.toMatchObject(currentDeck.cards)
      })
    })

    describe('deck/deal', () => {
      it('should deal from the top of the deck', () => {
        const [cardOnTop] = currentDeck.cards
        const { selectedCard, cards } = deal(currentDeck)

        const isSelectedCardOnDeck = cardIsOnDeck(selectedCard, cards)

        expect(cardOnTop).toMatchObject(selectedCard)
        expect(isSelectedCardOnDeck).toBeFalsy()
        expect(currentDeck.cards.length).not.toEqual(cards.length)
      })
    })
  })
})
