const { config } = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const db = require('./src/db')

const { deckRoutes } = require('./src/deck/routes')

db.connect()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/deck', deckRoutes)

app.get('/status', (_req, res) => res.send('ok'))

app.listen(config.APP_PORT, _ => {
  console.log(`listening on ${config.APP_PORT}`)
})
