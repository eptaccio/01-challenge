const { addToMiddle } = require('./addToMiddle')
const { createDeck, DECK_DEFINITION } = require('./createDeck')
const { deal } = require('./deal')
const { findDeck } = require('./findDeck')
const { getRandomCard } = require('./getRandomCard')
const { saveDeck } = require('./saveDeck')
const { updateDeck } = require('./updateDeck')

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
  findDeck,
  saveDeck,
  updateDeck,
  DECK_DEFINITION,
  SHUFFLE_POSITIONS
}
