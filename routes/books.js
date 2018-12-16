const router = require('express').Router()

const books = require('../resource/book.config')

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(books))
  res.end()
})

module.exports = router
