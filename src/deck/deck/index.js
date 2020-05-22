const { addToMiddle } = require('./addToMiddle')
const { getRandomCard } = require('./getRandomCard')
const { deal } = require('./deal')
const { createDeck, DECK_DEFINITION } = require('./createDeck')

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
