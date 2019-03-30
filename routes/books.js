const router = require('express').Router()

const books = require('../resource/book.config')
const others = require('../resource/others.config')

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(books))
  res.end()
})

router.get('/{id}', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(others))
  res.end()
})

module.exports = router
