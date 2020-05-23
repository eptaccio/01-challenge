const { shuffle, updateDeck, findDeck } = require('../deck')
const { loggerBuilder, isValidDeckId } = require('../../utils')

const {
  deckResponse,
  errorResponse,
  invalidDeckIdResponse,
  deckNotFoundResponse
} = require('../responses')

const logger = loggerBuilder(__filename)

const shuffleController = async (req, res) => {
  try {
    const { deckId } = req.body

    if (!isValidDeckId(deckId)) {
      res.status(400).send(invalidDeckIdResponse(deckId))
    }

    const deck = await findDeck({ id: deckId })

    if (!deck) {
      res.status(404).send(deckNotFoundResponse(deckId))
    }

    const { cards } = shuffle(deck)

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
  shuffle: shuffleController
}
