const res = require("express/lib/response");

class ProfessoresControllers{
    getAll(req, res){  
        res.send('ProfessoresController - getAll')
    }
    getById(req, res){  
        res.send('ProfessoresController - getById')
    }    
}

module.exports = new ProfessoresControllers()