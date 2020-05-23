const { SHUFFLE_POSITIONS } = require('../deck/deck')

const isValidShufflePosition = position =>
  position && SHUFFLE_POSITIONS[String(position).toUpperCase()]

module.exports = {
  isValidShufflePosition
}
