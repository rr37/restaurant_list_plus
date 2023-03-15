const express = require('express')
const app = express()

const port = 3000

app.get('/',(req, res) =>{
  // req.render
  res.send('Testing ...')
})

app.listen(port, (req, res) => {
  console.log('This is a express server')
})
