const Mysql = require('../db');
const queries = require("../queries");

const getAllChemicalTypes = (req, res) => {
    Mysql.getInstance().query(queries.QUERY_GET_ALL_CHEMICAL_TYPE_1, function (error, results, fields) {
        if (error) {
            console.error(`[ERROR] :: getAllChemicalTypes :: ${error.message}`)
            res.status(400).send({status: false, message: error.message})
        } else {
            if (results.length) {
                res.send({status: true, results})
            } else {
                res.status(204).send()
            }
        }
    });
}


const getAllChemicalTypesByQueryName = (req, res) => {
    const { chemicalName } = req.query;
    Mysql.getInstance().query(queries.QUERY_SEARCH_BY_CHEMICAL_NAME, chemicalName, function (error, results, fields) {
        if (error) {
            console.error(`[ERROR] :: getAllChemicalTypesByQueryName :: ${error.message}`)
            res.status(400).send({status: false, message: error.message})
        } else {
            if (results.length) {
                res.send({status: true, results})
            } else {
                res.status(204).send()
            }
        }
    });
}

module.exports = {getAllChemicalTypes, getAllChemicalTypesByQueryName}