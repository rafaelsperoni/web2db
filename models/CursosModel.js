class CursosModel{
    mensagem = ""
    find(query, callback){
        console.log('find')
        this.mensagem = 'MÉTODO find do model'
    }

    create(data, callback){

    }

    update(_id, data, callback){

    }
    delete(_id, callback){}
}

module.exports = new CursosModel(this.mensagem)