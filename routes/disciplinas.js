const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('lista doas disciplinas')
})

router.get('/:id', (req, res)=>{
    res.send('dados da disciplina por id')
})

router.post('/', (req, res)=>{
    res.send('cria uma nova disciplina')
})

router.put('/:id', (req, res)=>{
    res.send('altera uma disciplina')
})

router.delete('/:id', (req, res)=>{
    res.send('apaga uma disciplina')
})

module.exports = router






//const CursosController = require('../controllers/CursosController')
//router.get('/', CursosController.getAll.bind(CursosController))
// router.get('/', (req, res, next) => CursosController.getAll(req, res, next) )
// router.get('/:_id', CursosController.getById.bind(CursosController))
