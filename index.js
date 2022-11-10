const express = require('express')

const app = express()

const path = require('path')

app.use(express.static('./public'))

app.use('/', require('./routes'))

var server = app.listen(8001, ()=>{
    console.log("running on " + server.address().port)
})