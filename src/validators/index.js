const { isValidDeckId } = require('./isValidDeckId')
const { isValidCard } = require('./isValidCard')
const { isValidShufflePosition } = require('./isValidShufflePosition')
const { isCardAvailable } = require('./isCardAvailable')

module.exports = {
  isValidDeckId,
  isValidCard,
  isValidShufflePosition,
  isCardAvailable
}
