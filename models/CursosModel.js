class CursosModel{
    findAll(query){
        const cursos = [
            {
                nome: 'Sistemas para Internet',
                sigla: 'TSI'
            },
            {
                nome: 'Sistemas de Informação',
                sigla: 'BSI'
            },
        ]
        return cursos
    }

    findById(id){
        return 'Metodo find id do model ' + id
    }

    create(data, retorno){
        retorno(data)
//        retorno('MÉTODO create do model')
    }

    update(_id, data, callback){
        retorno('MÉTODO update do model')
    }
    delete(_id, callback){
        retorno('MÉTODO delete do model')
    }
}

module.exports = new CursosModel()