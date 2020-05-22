const { config } = require('./config')
const bodyParser = require('body-parser')
const express = require('express')
const db = require('./src/db')

db.connect()

const app = express()

app.use(bodyParser.json())

app.get('/status', (_req, res) => res.send('ok'))

app.listen(config.APP_PORT, _ => {
  console.log(`listening on ${config.APP_PORT}`)
})
