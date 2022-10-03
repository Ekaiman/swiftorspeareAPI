const express = require('express')
const app = express()
const swift = require('./data/swiftQuotes')
const quotes = require('./data/quotes')



app.get('/quotes', (req, res) => {
  res.status(200).json({ quotes })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server started ${port}`)
})