const {
  loggerBuilder,
  isValidDeckId,
  isValidCard,
  isValidShufflePosition
} = require('../../utils')

const {
  updateDeck,
  findDeck,
  SHUFFLE_POSITIONS,
  shuffleOn
} = require('../deck')

const {
  deckResponse,
  errorResponse,
  invalidDeckIdResponse,
  deckNotFoundResponse,
  invalidCardResponse,
  invalidShufflePosition
} = require('../responses')

const logger = loggerBuilder(__filename)

const shuffleOnDeckController = async (req, res) => {
  try {
    const { deckId, position } = req.body

    if (!isValidDeckId(deckId)) {
      return res.status(400).send(invalidDeckIdResponse(deckId))
    }

    const deck = await findDeck({ id: deckId })

    if (!deck) {
      return res.status(404).send(deckNotFoundResponse(deckId))
    }

    const { card } = req.body

    if (!card) {
      return res.status(400).send(invalidCardResponse(
        '`card` is required'
      ))
    }

    if (!isValidCard(card)) {
      return res.status(400).send(invalidCardResponse())
    }

    if (!isCardAvailable(card, deck.usedCards)) {
      return res.status(400).send(cardNotAvailableResponse())
    }

    if (position && !isValidShufflePosition(position)) {
      return res.status(400).send(invalidShufflePosition())
    }

    const { cards } = shuffleOn({
      newCard: card,
      position: position || SHUFFLE_POSITIONS.TOP,
      cards: deck.cards
    })

    const newDeck = {
      ...deck.toObject(),
      cards
    }

    await updateDeck(newDeck)

    const response = deckResponse(newDeck)

    res.send(response)
  } catch (error) {
    logger.error(error)

    res.status(500).send(errorResponse({
      message: 'unexpected error on deal'
    }))
  }
}

module.exports = {
  shuffleOnDeck: shuffleOnDeckController
}
