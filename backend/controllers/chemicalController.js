const Mysql = require('../db');
const queries = require("../queries");

const getAllChemicalDocsByType = async (req, res) => {
    
Mysql.getInstance()
    .then( (conn) => {
        const { chemicalName } = req.query;
        conn.query(queries.QUERY_SEARCH_BY_CHEMICAL_NAME_DOCS, chemicalName, function (error, results) {
            if (error) {
                console.error(`[ERROR] :: getAllChemicalTypes :: ${error.message}`)
                res.status(400).send({status: false, message: error.message})
            } else {
                res.json(results)
            }
        });
    }).catch( err => {
        console.log(err.message)
        res.status(500).send({status:false,message:'Error internal server'})
    })
}


const getAllChemicalDocsByType2 = async (req, res) => {
    
    Mysql.getInstance()
        .then( (conn) => {
            const { chemicalName } = req.query;
            conn.query(queries.QUERY_SEARCH_BY_CHEMICAL_NAME_DOCS_2, chemicalName, function (error, results) {
                if (error) {
                    console.error(`[ERROR] :: getAllChemicalTypes :: ${error.message}`)
                    res.status(400).send({status: false, message: error.message})
                } else {
                    res.json(results)
                }
            });
        }).catch( err => {
            console.log(err.message)
            res.status(500).send({status:false,message:'Error internal server'})
        })
}

const getChemicalDocsByType1 = async (req, res) => {
    
    Mysql.getInstance()
        .then( (conn) => {
            const { chemicalName } = req.query;
            conn.query(queries.QUERY_GET_ALL_DOCS_BY_CHEMICAL_TYPE_1, chemicalName, function (error, results) {
                if (error) {
                    console.error(`[ERROR] :: getAllChemicalTypes :: ${error.message}`)
                    res.status(400).send({status: false, message: error.message})
                } else {
                    res.json(results)
                }
            });
        }).catch( err => {
            console.log(err.message)
            res.status(500).send({status:false,message:'Error internal server'})
        })
}

const getChemicalDocsByType2 = async (req, res) => {
    
    Mysql.getInstance()
        .then( (conn) => {
            const { chemicalName } = req.query;
            conn.query(queries.QUERY_GET_ALL_DOCS_BY_CHEMICAL_TYPE_2, chemicalName, function (error, results) {
                if (error) {
                    console.error(`[ERROR] :: getAllChemicalTypes :: ${error.message}`)
                    res.status(400).send({status: false, message: error.message})
                } else {
                    res.json(results)
                }
            });
        }).catch( err => {
            console.log(err.message)
            res.status(500).send({status:false,message:'Error internal server'})
        })
}

const getAllChemicalData = async (req, res) => {
    
    Mysql.getInstance()
        .then( (conn) => {
            const { chemicalName } = req.query;
            conn.query(queries.QUERY_GET_ALL_CHEMICAL_DATA, chemicalName, function (error, results) {
                if (error) {
                    console.error(`[ERROR] :: getAllChemicalTypes :: ${error.message}`)
                    res.status(400).send({status: false, message: error.message})
                } else {
                    res.json(results)
                }
            });
        }).catch( err => {
            console.log(err.message)
            res.status(500).send({status:false,message:'Error internal server'})
        })
}

module.exports = { getAllChemicalDocsByType, getAllChemicalDocsByType2, getChemicalDocsByType1, getChemicalDocsByType2, getAllChemicalData }