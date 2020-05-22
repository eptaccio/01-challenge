const mongoose = require('mongoose')
const { config } = require('../../config')

const connect = () =>
  mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

module.exports = {
  connect
}
