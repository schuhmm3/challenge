const connection = require('../../config/connection');

test = (req, res) => {
    res.json({name:"hello"});
}

getAllChemicalTypes_1 = (req, res) => {
    connection.query('SELECT * FROM chemical_type_1', (error, result) => {
        if(error) throw error;
        res.json(result);
    })
}

module.exports = {
    test,
    getAllChemicalTypes_1
}