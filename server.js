const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use('/api/test',require('./routes/test'))
 console.log('app started at  3000')
app.listen(3000)