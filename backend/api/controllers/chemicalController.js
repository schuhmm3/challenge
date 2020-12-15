const connection = require('../../config/connection');
const queries = require('../queries');

const getAllChemicalTypes_1 = (req, res) => {
    connection.query(queries.QUERY_GET_ALL_CHEMICAL_TYPE_1, (error, result) => {
        if(error) throw error;
        res.json(result);
    })
}

const getAllChemicalTypes_2 = (req, res) => {
    connection.query(queries.QUERY_GET_ALL_CHEMICAL_TYPE_2, (error, result) => {
        if(error) throw error;
        res.json(result);
    })
}

const getAllChemicalNames = (req, res) => {
    const { chemicalName } = req.query;
    connection.query(queries.QUERY_SEARCH_BY_CHEMICAL_NAME, chemicalName, (error, result) => {
        if(error) throw error;
        res.json(result);
    });
    
}

module.exports = {
    getAllChemicalTypes_1,
    getAllChemicalTypes_2,
    getAllChemicalNames
}