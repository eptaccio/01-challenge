require('dotenv').config()

const config = {
  APP_PORT: process.env.APP_PORT || 3000,
  DB_URL: process.env.DB_URL || 3000
}

module.exports = {
  config
}
