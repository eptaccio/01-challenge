const mongoose = require('mongoose')

const { Schema } = mongoose

const DeckSchema = Schema({
  cards: {
    type: [],
    required: true
  },
  usedCards: {
    type: [],
    default: []
  }
})

const Deck = mongoose.model('Deck', DeckSchema)

module.exports = {
  Deck
}
