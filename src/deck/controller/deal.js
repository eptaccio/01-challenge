const { deal, updateDeck, findDeck } = require('../deck/')
const { loggerBuilder } = require('../../utils')
const { isValidDeckId } = require('../../validators')

const {
  deckResponse,
  errorResponse,
  invalidDeckIdResponse,
  deckNotFoundResponse,
  emptyDeckResponse,
  dealQuantityNotAvailableResponse
} = require('../responses')

const logger = loggerBuilder(__filename)

const dealController = async (req, res) => {
  try {
    const { quantity = 1, deckId } = req.body

    if (!isValidDeckId(deckId)) {
      return res.status(400).send(invalidDeckIdResponse(deckId))
    }

    const deck = await findDeck({ id: deckId })

    if (!deck) {
      return res.status(404).send(deckNotFoundResponse(deckId))
    }

    const emptyDeck = deck.length === 0
    if (emptyDeck) {
      return res.status(400).send(emptyDeckResponse(deckId))
    }

    const dealQuantityNotAvailable = quantity > deck.cards.length
    if (dealQuantityNotAvailable) {
      return res.status(400).send(dealQuantityNotAvailableResponse())
    }

    const { selectedCards, cards } = deal({
      cards: deck.cards,
      quantity
    })

    const newDeck = {
      ...deck.toObject(),
      cards,
      usedCards: [
        ...selectedCards,
        ...deck.usedCards
      ]
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
  deal: dealController
}
