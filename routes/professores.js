const express = require('express')
const ProfessoresControllers = require('../controllers/ProfessoresControllers')
const router = express.Router()

router.get('/', (req, res)=>ProfessoresControllers.getAll(req, res))

router.get('/:id', (req, res)=>ProfessoresControllers.getById(req, res))

router.post('/', (req, res)=>{
    res.send('cria um novo professor')
})

router.put('/:_id', (req, res)=>{
    res.send('altera um professor')
})

router.delete('/:_id', (req, res)=>{
    res.send('apaga um professor')
})

module.exports = router






//const CursosController = require('../controllers/CursosController')
//router.get('/', CursosController.getAll.bind(CursosController))
// router.get('/', (req, res, next) => CursosController.getAll(req, res, next) )
// router.get('/:_id', CursosController.getById.bind(CursosController))
