const res = require("express/lib/response")

const { findById } = require("./CursosModel")

const findAll = (req, res)=>{
    return {descricao: 'ProfessoresModel - findAll'} 
}

const findById = (req, res)=>{
    return {descricao: 'ProfessoresModel- FindById'}
}

module.exports = {
    findAll,
    findById
}