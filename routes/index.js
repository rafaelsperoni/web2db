const express = require('express')
const router = express.Router()

//rotas para cursos
router.use('/cursos', require('./cursos'))
//rotas para professores
router.use('/professores', require('./professores'))
//rotas para disciplinas
router.use('/disciplinas', require('./disciplinas'))
module.exports = router