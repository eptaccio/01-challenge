const { Types } = require('mongoose')

const isValidDeckId = id =>
  Types.ObjectId.isValid(id)

module.exports = {
  isValidDeckId
}
