const express = require('express')
const multer = require('multer')
const CursosController = require('../controllers/CursosController')
const router = express.Router()

router.get('/', (req, res, next) => CursosController.getAll(req, res, next) )

router.get('/create', (req, res, next) => CursosController.formCreate(req, res, next))

router.get('/:id', (req, res, next) => CursosController.getById(req, res, next))


router.post('/create', multer().none(), (req, res)=> CursosController.create(req, res))
// router.post('/create', multer().none(), (req, res)=>{
//     res.send(JSON.stringify(req.body))
// })

router.put('/:id', (req, res)=>{
    res.send('altera um curso')
})

router.delete('/:_id', (req, res)=>{
    res.send('apaga um curso')
})

module.exports = router






//router.get('/', CursosController.getAll.bind(CursosController))
