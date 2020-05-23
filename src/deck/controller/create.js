const { createDeck, saveDeck, shuffle } = require('../deck/')
const { deckResponse, errorResponse } = require('../responses')
const { loggerBuilder } = require('../../utils')

const logger = loggerBuilder(__filename)

const create = async (req, res) => {
  try {
    const { quantity = 1 } = req.body

    const decks = []

    for (let index = 0; index < quantity; index++) {
      const newDeck = createDeck()
      decks.push(shuffle(newDeck))
    }

    const results = await Promise.all(decks.map(saveDeck))

    res.status(201).send(results.map(deckResponse))
  } catch (error) {
    logger.error(error)

    res.status(500).send(errorResponse({
      message: 'unexpected error on deck creation :('
    }))
  }
}

module.exports = {
  create
}
