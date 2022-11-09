const express = require('express')

const app = express()

app.use(express.static('./public'))

app.use('/', require('./routes'))

app.get('/', (req, res)=>{
    res.send('hello')
})


var server = app.listen(8001, ()=>{
    console.log("running on " + server.address().port)
})