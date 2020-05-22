const { deal, updateDeck, findDeck } = require('../deck/')
const { deckResponse, errorResponse } = require('../responses')
const { loggerBuilder } = require('../../utils')

const logger = loggerBuilder(__filename)

const dealController = async (req, res) => {
  try {
    const { quantity = 1, deckId } = req.body

    if (!deckId) {
      res.status(400).send(errorResponse({
        message: '´deckId´ is required'
      }))
    }

    const deck = await findDeck({ id: deckId })

    if (!deck) {
      res.status(404).send(errorResponse({
        message: `deck ${deckId} not found`
      }))
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

    res.send(deckResponse({
      ...newDeck,
      selectedCards
    }))
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
