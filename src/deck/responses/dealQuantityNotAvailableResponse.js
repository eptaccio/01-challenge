const { errorResponse } = require('./errorResponse')

const dealQuantityNotAvailableResponse = () => {
  return errorResponse({
    message: 'deal quantity is not available on deck'
  })
}

module.exports = {
  dealQuantityNotAvailableResponse
}
