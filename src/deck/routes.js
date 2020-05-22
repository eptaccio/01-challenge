const { Router } = require('express')

const {
  create,
  deal,
  shuffle,
  shuffleOnDeck
} = require('./controller')

const deckRoutes = Router()

deckRoutes.post('/', create)
deckRoutes.put('/deal', deal)
deckRoutes.put('/shuffle', shuffle)
deckRoutes.put('/shuffle/on/deck', shuffleOnDeck)

module.exports = {
  deckRoutes
}
