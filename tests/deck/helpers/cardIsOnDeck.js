const cardIsOnDeck = (selectedCard, cards) => cards.some(card =>
  card.value === selectedCard.value &&
  card.suit === selectedCard.suit
)

module.exports = {
  cardIsOnDeck
}
