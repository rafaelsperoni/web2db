const { response } = require("express")
const CursosModel = require("../models/CursosModel")

class CursosController{
    model = CursosModel
    getAll(req, res, next){
        try {
            const cursos = this.model.findAll({})
            return res.render('views/cursos')
            
        } catch(e) {
            return res.status(401).json({ error: e } )
        }


        // this.model.find({},(err, data)=>{
        //     console.log("data: " + data)
        //     if(err){
        //         console.log("error: " + err)
        //         return res.status(401).send(err)
        //     }
        //     console.log('controller getall ', data)
        //     res.send(data)
        // })
    }

    getById(req, res, next){
        try{
            const curso = this.model.findById(1)
            res.json(curso)
        }catch(e) {
            return res.json({error: e})
        }

    }

    create(req, res, next){
        res.send('cria um curso')
    }
    update(req, res, next){
        res.send('altera um curso')
    }
    delete(req, res, next){
        res.send('apaga um curso')
    }
}

module.exports = new CursosController()