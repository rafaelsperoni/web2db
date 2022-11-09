const { response } = require("express")
const CursosModel = require("../models/CursosModel")

class CursosController{
    model = CursosModel
    getAll(req, res, next){
        this.model.find({}, (err, data)=>{
            if(err){
                return next(err)
            }
            console.log('controller getall '+data)
            response.send(data)
        })
    }

    getById(req, res, next){
        res.send('controller - dados de um curso')
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