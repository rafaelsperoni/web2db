const express = require('express')
const CursosController = require('../controllers/CursosController')
const router = express.Router()

router.get('/', CursosController.getAll.bind(CursosController))
// router.get('/', (req, res)=>{
//     res.send('lista dos cursos')
// })

router.get('/:_id', CursosController.getById.bind(CursosController))
// router.get('./:_id', (req, res)=>{
//     res.send('dados do curso por id')
// })

router.post('/', (req, res)=>{
    res.send('cria um novo curso')
})

router.put('/:_id', (req, res)=>{
    res.send('altera um curso')
})

router.delete('/:_id', (req, res)=>{
    res.send('apaga um curso')
})

module.exports = router