const {
  createDeck,
  DECK_DEFINITION,
  SHUFFLE_POSITIONS,
  shuffle,
  shuffleOn,
  deal,
  addToMiddle,
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

      describe('should shuffle the card into deck', () => {
        const firstItem = { value: 'A', suit: 'SPADES' }
        const secondItem = { value: '2', suit: 'DIAMONDS' }
        const thirdItem = { value: '3', suit: 'CLUBS' }

        const newCard = { value: '10', suit: 'HEARTS' }

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
