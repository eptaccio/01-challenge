const { currentDeck } = require('./helpers/mockData')
const { cardIsOnDeck } = require('./helpers/cardIsOnDeck')
const { deal } = require('deck/deck')

describe('deck/deal', () => {
  it('should deal from the top of the deck', () => {
    const [cardOnTop] = currentDeck.cards
    const { selectedCards, cards } = deal(currentDeck)
    const [selectedCard] = selectedCards

    const isSelectedCardOnDeck = cardIsOnDeck(selectedCard, cards)

    expect(cardOnTop).toMatchObject(selectedCard)
    expect(isSelectedCardOnDeck).toBeFalsy()
    expect(currentDeck.cards.length).not.toEqual(cards.length)
    expect(selectedCards.length).toEqual(1)
  })

  it('should deal two cards from the top of the deck', () => {
    const [expectFirstCard, expectSecondCard] = currentDeck.cards

    const { selectedCards, cards } = deal({
      cards: currentDeck.cards,
      quantity: 2
    })

    const [firstCard, secondCard] = selectedCards

    const isSelectedCardOnDeck = cardIsOnDeck(firstCard, cards) &&
      cardIsOnDeck(secondCard, cards)

    expect(expectFirstCard).toMatchObject(firstCard)
    expect(expectSecondCard).toMatchObject(secondCard)
    expect(isSelectedCardOnDeck).toBeFalsy()
    expect(currentDeck.cards.length).not.toEqual(cards.length)
    expect(selectedCards.length).toEqual(2)
  })
})
