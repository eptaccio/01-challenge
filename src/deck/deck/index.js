const { addToMiddle } = require('./addToMiddle')
const { createDeck, DECK_DEFINITION } = require('./createDeck')
const { deal } = require('./deal')
const { getRandomCard } = require('./getRandomCard')

const {
  shuffle, shuffleOn,
  SHUFFLE_POSITIONS
} = require('./shuffle')

module.exports = {
  createDeck,
  getRandomCard,
  shuffle,
  deal,
  shuffleOn,
  addToMiddle,
  DECK_DEFINITION,
  SHUFFLE_POSITIONS
}
