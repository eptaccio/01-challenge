require('dotenv').config()

const config = {
  APP_PORT: process.env.APP_PORT || 3001,
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/games'
}

module.exports = {
  config
}
