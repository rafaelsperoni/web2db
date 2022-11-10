const express = require('express')
const CursosController = require('../controllers/CursosController')
const router = express.Router()

router.get('/', (req, res, next) => CursosController.getAll(req, res, next) )

router.get('/:id', (req, res, next) => CursosController.getById(req, res, next))

router.post('/', (req, res)=>{
    res.send('cria um novo curso')
})

router.put('/:id', (req, res)=>{
    res.send('altera um curso')
})

router.delete('/:_id', (req, res)=>{
    res.send('apaga um curso')
})

module.exports = router






//router.get('/', CursosController.getAll.bind(CursosController))
