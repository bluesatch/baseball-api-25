const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

server.use('/', router)

server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`You've just joined the ${PORT} hit club!`))