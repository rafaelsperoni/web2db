const express = require('express')
const router = express.Router()

router.use('/cursos', require('./cursos'))
router.use('/professores', require('./professores'))
router.use('/disciplians', require('./disciplinas'))
module.exports = router