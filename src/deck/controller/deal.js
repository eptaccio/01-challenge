const { deal, updateDeck, findDeck } = require('../deck/')
const { loggerBuilder, isValidDeckId } = require('../../utils')

const {
  deckResponse,
  errorResponse,
  invalidDeckIdResponse,
  deckNotFoundResponse
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

    const { selectedCards, cards } = deal({
      cards: deck.cards,
      quantity
    })

    const newDeck = {
      ...deck.toObject(),
      cards
    }

    await updateDeck(newDeck)

    const response = deckResponse({
      ...newDeck,
      selectedCards
    })

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
