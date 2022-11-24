const { response } = require("express")
const CursosModel = require("../models/CursosModel")

class CursosController{
    model = CursosModel
    getAll(req, res, next){
        try {
            const cursos = this.model.findAll({})
            return res.render('cursos', {cursos: cursos})            
        } catch(e) {
            return res.status(401).json({ error: e } )
        }

    }

    getById(req, res, next){
        try{
            const curso = this.model.findById(1)
            res.json(curso)
        }catch(e) {
            return res.json({error: e})
        }

    }

    formCreate(req, res, next){
        res.render('cursos/insertForm')
    }

    create(req, res){
        res.send(req.body)
        // try{
        //     console.log(req)
        //     const curso = {
        //         nome: req.body.nome,
        //         sigla: req.body.sigla
        //     }
        //     return this.model.create(curso, (retorno)=>{
        //         console.log(retorno)
        //     })
        // }catch(e){
        //     return res.json({error: e})
        // }
    }

    update(req, res, next){
        res.send('altera um curso')
    }
    delete(req, res, next){
        res.send('apaga um curso')
    }
}

module.exports = new CursosController()