class CursosModel{
    findAll(query){
        return  'MÉTODO find do model'
    }

    findById(id){
        return 'Metodo find id do model ' + id
    }

    create(data, retorno){
        retorno('MÉTODO create do model')
    }

    update(_id, data, callback){
        retorno('MÉTODO update do model')
    }
    delete(_id, callback){
        retorno('MÉTODO delete do model')
    }
}

module.exports = new CursosModel()